import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService, NotificationService } from '@core/services';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingComponent } from './shared/ui/elements/loading/loading.component';
import { NotificationComponent } from './shared/ui/notification/notification.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, LoadingComponent, NotificationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly notificationService = inject(NotificationService);
  protected readonly loadingService = inject(LoadingService);

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translate.addLangs(['pl', 'en']);
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
  }
}
