import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { NotificationService } from '@core/services';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notification',
  imports: [CommonModule, TranslateModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  notification = input.required<{ type: string; message: string }>();

  private notificationService = inject(NotificationService);

  closeNotification() {
    this.notificationService.clear();
  }
}
