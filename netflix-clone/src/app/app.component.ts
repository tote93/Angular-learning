import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
}

window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('header--scroll', window.scrollY > 0);
});
