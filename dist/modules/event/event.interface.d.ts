export declare enum EEventType {
    online = "online",
    venue = "venue"
}
export declare class Ticket {
    id: string;
    name: string;
    price: number;
    quantity: number;
    saleStart: Date;
    saleEnd: Date;
}
export declare class Event {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    type: EEventType;
    location: string;
    userId: string;
    publishDate: Date;
    ticket: Ticket;
    constructor();
}
