export enum NotificationStatus {
  READ = 1,
  UNREAD = 2
}

export enum NotificationType {
  SUCCESS = 1,
  WARNING = 2,
  ERROR = 3
}

export class NotificationClass {
  state: NotificationStatus = NotificationStatus.READ;
  type?: NotificationType;
  text?: String;

  public write(text: string, type: NotificationType): void {
    this.state = NotificationStatus.UNREAD;
    this.text = text;
    this.type = type;

    return;
  }

  public error(text: string): void {
    this.write(text, NotificationType.ERROR);

    return;
  }

  public warn(text: string): void {
    this.write(text, NotificationType.WARNING);

    return;
  }

  public success(text: string): void {
    this.write(text, NotificationType.SUCCESS);

    return;
  }
}
