import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetUserDataService } from '../../data-access';
import { UserData } from '../../data-structure';

export const UserResolver: ResolveFn<UserData> = () => {
  return inject(GetUserDataService).get();
};
