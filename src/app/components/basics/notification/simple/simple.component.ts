import { Component, Input, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { NotificationClass, NotificationStatus, NotificationType } from './notification-simple.class';

@Component({
  selector: 'app-base-notification-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class BaseNotificationSimpleComponent implements OnInit {

  notificationType = NotificationType;

  @Input() notification: NotificationClass = new NotificationClass();
  @Input() status: NotificationStatus = NotificationStatus.UNREAD;

  constructor(private readonly logger: NGXLogger) {
  }

  ngOnInit(): void {
  }

  changeStatus(): void {
    if (this.notification.state === NotificationStatus.READ) {
      this.notification.state = NotificationStatus.UNREAD;
      this.logger.debug('Notification status to UNREAD');
    } else {
      this.notification.state = NotificationStatus.READ;
      this.logger.debug('Notification status to READ');
    }
  }

  checkStatus(): Boolean {
    if (!this.notification || this.notification.state !== this.status) {
      return false;
    }

    return true;
  }

}
