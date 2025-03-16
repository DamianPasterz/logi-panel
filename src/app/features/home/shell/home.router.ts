import { Routes } from '@angular/router';
import { UserResolver } from '../logic/resolver/user.resolver';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    resolve: {
      userDto: UserResolver,
    },
    loadComponent: () => import('../components/home.component').then((m) => m.HomeComponent),
  },
];
