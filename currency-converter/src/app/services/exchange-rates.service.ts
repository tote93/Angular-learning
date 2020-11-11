import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  constructor(private httpClient: HttpClient) {}
  // Llamada de get mediante el cliente http
  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
  }
}
