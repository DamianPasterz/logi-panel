import { NotificationType } from '../types/notification-type';

export interface Notification {
  type: NotificationType;
  message: string;
}
