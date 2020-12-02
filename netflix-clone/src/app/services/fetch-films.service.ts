import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmResponse } from '../interfaces/film-response';

@Injectable({
  providedIn: 'root',
})
export class FetchFilmsService {
  private apiKey: string = '5ecc73b79478ec517848a64e6e2a6df1';
  constructor(private _api: HttpClient) {}
  getFilm(url): Observable<FilmResponse> {
    return this._api.get<FilmResponse>(
      `https://api.themoviedb.org/3${url}&api_key=${this.apiKey}`
    );
  }
}
