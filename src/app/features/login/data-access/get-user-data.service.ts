import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../data-structure';

@Injectable({
  providedIn: 'root',
})
export class GetUserGroupListService {
  private http = inject(HttpClient);

  get(): Observable<UserData> {
    return this.http.get<UserData>('/assets/user.json');
  }
}
