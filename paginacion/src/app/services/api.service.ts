import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/user';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com';
  constructor(private _api: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this._api.get<User[]>(`${this.apiUrl}/todos/`);
  }
}
