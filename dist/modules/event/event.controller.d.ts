import { UserService } from '../user/user.service';
import { CreateEventDTO, UpdateEventDTO } from './DTO/create-event.dto';
import { BuyTicketDTO } from './DTO/buyTicket.dto';
import { Event } from './event.interface';
import { EventService } from './event.service';
export declare class EventController {
    private readonly eventService;
    private readonly userService;
    constructor(eventService: EventService, userService: UserService);
    createEvent(request: any, body: CreateEventDTO): Promise<{
        code: number;
        message: string;
        data: import("nestjs-dynamoose").Document<Event>;
    }>;
    updateEvent(request: any, body: UpdateEventDTO): Promise<{
        code: number;
        message: string;
        data?: undefined;
    } | {
        code: number;
        message: string;
        data: import("nestjs-dynamoose").Document<Event>;
    }>;
    getEvents(limit?: number): Promise<{
        code: number;
        message: string;
        data: {
            events: any;
            length: any;
        };
    }>;
    getEventAnalisys(request: any): Promise<{
        code: number;
        message: string;
        data: {
            daily: {
                data: any[];
                availableTickets: any;
                soldTickets: any;
            };
            weekly: {
                data: any[];
                availableTickets: any;
                soldTickets: any;
            };
            monthly: {
                data: any[];
                availableTickets: any;
                soldTickets: any;
            };
            allTime: {
                data: any[];
                availableTickets: any;
                soldTickets: any;
            };
        };
    }>;
    getEventById(id: string, relations?: string[]): Promise<{
        code: number;
        message: string;
        data: import("nestjs-dynamoose").Document<Event>;
    }>;
    buyEventTicket(id: string, request: any, body: BuyTicketDTO): Promise<{
        code: number;
        message: string;
        data: import("nestjs-dynamoose").Document<Event>;
    }>;
}
