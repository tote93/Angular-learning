import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _http: HttpClient) {
    let form = new FormData();
    form.append('archivo', 'texto');
    this._http
      .post('https://jsonplaceholder.typicode.com/users', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .subscribe(
        (resp) => console.log(resp),
        (err: HttpErrorResponse) => console.log(err),
        () => console.log('Peticion finalizada')
      );
  }
}
