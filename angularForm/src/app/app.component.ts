import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Import en app ReactiveFormsModule
  signupForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.signupForm = this._builder.group({
      nombre: [''],
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required],
    });
  }

  enviar(json) {
    console.log(json);
  }
}
