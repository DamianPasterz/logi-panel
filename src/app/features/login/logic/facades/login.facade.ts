import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService, NotificationService } from '@core/services';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class LoginFacade {
  private readonly router = inject(Router);
  private readonly loadingService = inject(LoadingService);
  private readonly notificationService = inject(NotificationService);

  public userLogin() {
    this.loadingService.show();
    of(null)
      .pipe(
        delay(2000),
        tap({
          error: () => {
            this.loadingService.hide();
            this.router.navigate(['/login']);
          },
        })
      )
      .subscribe(() => {
        const token = this.generateToken();
        localStorage.setItem('authToken', token);
        this.notificationService.showSuccess('loginSuccess');
        this.loadingService.hide();
        this.router.navigate(['/home']);
      });
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2);
  }
}
