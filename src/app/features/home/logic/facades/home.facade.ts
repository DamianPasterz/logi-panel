import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService, NotificationService } from '@core/services';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class HomeFacade {
  private readonly router = inject(Router);
  private readonly loadingService = inject(LoadingService);
  private readonly notificationService = inject(NotificationService);

  logout() {
    this.loadingService.show();
    of(null)
      .pipe(delay(3000))
      .subscribe(() => {
        localStorage.removeItem('authToken');
        this.notificationService.showSuccess('logoutSuccess');
        this.loadingService.hide();
        this.router.navigate(['/login']);
      });
  }
}
