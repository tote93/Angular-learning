import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'currency-converter';
  clickCounter = 0;

  incrementCounter() {
    this.clickCounter++;
  }
}
