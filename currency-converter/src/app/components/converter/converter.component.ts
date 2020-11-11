import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount = 1;
  from = 'CAD';
  to = 'USD';
  rates: { [key: string]: number };
  // Me genera la variable servicio que viene siendo un servicio de exchangeRateService
  constructor(private service: ExchangeRatesService) {}
  // Inicializacion del componente
  ngOnInit(): void {
    this.loadRates();
  }
  loadRates() {
    this.service
      .getRates(this.from)
      .subscribe((res) => (this.rates = res.rates));
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  convert(): number {
    console.log(this.amount, this.rates[this.to]);
    return this.amount * this.rates[this.to];
  }
}
