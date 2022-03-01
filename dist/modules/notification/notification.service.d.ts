import { SNSClient } from '@aws-sdk/client-sns';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Notification } from './notification.interface';
import { Model } from 'nestjs-dynamoose';
export declare class NotificationService {
    private httpService;
    private notificationModel;
    snsClient: SNSClient;
    constructor(httpService: HttpService, notificationModel: Model<Notification, Notification['messageId']>);
    callGetApi(url: any): Promise<Observable<AxiosResponse<any, any>>>;
    createNotification(notification: Notification): Promise<import("nestjs-dynamoose").Document<Notification>>;
    getAllNotification(): Promise<import("nestjs-dynamoose").ScanResponse<import("nestjs-dynamoose").Document<Notification>>>;
    getNotificationById(id: string): Promise<import("nestjs-dynamoose").Document<Notification>>;
}