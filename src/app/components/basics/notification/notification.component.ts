import { Component, OnInit } from '@angular/core';
import { NotificationClass, NotificationStatus } from './simple/notification-simple.class';

@Component({
  selector: 'app-base-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class BaseNotificationComponent implements OnInit {

  notifications: Array<NotificationClass> = [];
  status: NotificationStatus = NotificationStatus.UNREAD;

  constructor() { }

  ngOnInit(): void {
  }

}
