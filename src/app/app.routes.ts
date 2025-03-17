import { Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from './core/guards';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [NoAuthGuard],
    loadChildren: () => import('@feature/login').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('@feature/home').then((m) => m.HOME_ROUTES),
  },
  { path: '**', redirectTo: 'login' },
];
