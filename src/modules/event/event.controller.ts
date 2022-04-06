import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard, Public } from 'src/guard/jwt-auth.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { UserRole } from '../user/user.interface';
import { UserService } from '../user/user.service';
import { CreateEventDTO, UpdateEventDTO } from './DTO/create-event.dto';
import { BuyTicketDTO } from './DTO/buyTicket.dto';
import { Event, Ticket } from './event.interface';
import { EventService } from './event.service';
import { UserTicket } from './userTicket.interface';

@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly userService: UserService,
  ) {}

  @Post('/create')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async createEvent(@Req() request: any, @Body() body: CreateEventDTO) {
    const ticket = new Ticket();
    Object.assign(ticket, body.ticket);
    ticket.saleStart = new Date(body.ticket.saleStart);
    ticket.saleEnd = new Date(body.ticket.saleEnd);
    ticket.remain = body.ticket.quantity;

    const event = new Event();
    Object.assign(event, body);
    event.userId = request.user.sub;
    event.startDate = new Date(body.startDate);
    event.endDate = new Date(body.endDate);
    event.publishDate = new Date(body.publishDate);
    event.ticket = { ...ticket };

    const newEvent = await this.eventService.createEvent(event);
    return {
      code: 201,
      message: 'Event created',
      data: newEvent,
    };
  }

  @Patch('/update')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async updateEvent(@Req() request: any, @Body() body: UpdateEventDTO) {
    const user = await this.userService.getUserById(request.user.sub);
    const foundEvent = await this.eventService.getEventById(body.id);

    if (!user)
      return {
        code: 404,
        message: 'User not found',
        data: null,
      };

    if (user.role !== UserRole.Admin)
      return {
        code: 403,
        message: 'Not allowed',
        data: null,
      };

    if (!foundEvent)
      return {
        code: 404,
        message: 'Event not found',
      };

    const { id } = body;

    delete body.id;

    const updateBody = {
      ...body,
      publishDate: new Date(body.publishDate),
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
      createdAt: new Date(body.createdAt),
      ticket: {
        ...body.ticket,
        saleStart: new Date(body.ticket.saleStart),
        saleEnd: new Date(body.ticket.saleEnd),
      },
    };

    const updatedEvent = await this.eventService.updateEvent(id, updateBody);

    return {
      code: 201,
      message: 'Event updated',
      data: updatedEvent,
    };
  }

  @Get('/')
  @Public()
  async getEvents(@Query('limit') limit?: number) {
    const events = await this.eventService.getAllEvents(limit);

    return {
      code: 200,
      message: '',
      data: { events, length: events.length },
    };
  }

  @Get('/:id')
  @Public()
  async getEventById(@Param('id') id: string) {
    const event = await this.eventService.getEventById(id);

    return {
      code: 200,
      message: '',
      data: event,
    };
  }

  @Post('/:id/buy-ticket')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async buyEventTicket(@Param('id') id: string, @Req() request: any, @Body() body: BuyTicketDTO) {
    const user = await this.userService.getUserById(request.user.sub);
    let event = await this.eventService.getEventById(id);

    // Check user is existed.
    if (!user)
      return {
        code: 404,
        message: 'User not found',
        data: null,
      };
    
    // Check number ticket is required.
    if(!body.number_ticket) {
      return {
        code: 400,
        message: 'number_ticket_is_required',
        data: null
      }
    }
    // Check if number ticket user buy great than ticket remain throw error.
    if (body.number_ticket > event.ticket.remain) {
      return {
        code: 400,
        message: 'number_ticket_great_than_ticket_remain',
        data: null
      }
    }

    // Insert ticket into user ticket.
    const userTicketData = new UserTicket();
    userTicketData.event = event;
    userTicketData.user = user;
    userTicketData.number_ticket = body.number_ticket;
    await this.eventService.createUserTicket(userTicketData);

    // Update remain ticket.
    event.ticket.remain -= +body.number_ticket;
    delete event.id;
    event = await this.eventService.updateEvent(id, event);

    return {
      code: 200,
      message: 'buy_ticket_successful',
      data: event,
    };
  }
}
