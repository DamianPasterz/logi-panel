import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from './data-structure/models/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  private readonly NOTIFICATION_DISPLAY_TIME = 7000;

  showSuccess(message: string) {
    this.showNotification({ type: 'success', message: `NOTIFICATION.${message}` });
  }

  showError(message: string) {
    this.showNotification({ type: 'error', message: `NOTIFICATION.${message}` });
  }

  private showNotification(notification: Notification) {
    this.notificationSubject.next(notification);

    setTimeout(() => {
      this.clear();
    }, this.NOTIFICATION_DISPLAY_TIME);
  }

  clear() {
    this.notificationSubject.next(null);
  }
}
