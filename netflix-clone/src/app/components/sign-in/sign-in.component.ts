import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/interfaces/user.response';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signupForm: FormGroup;
  user: UserResponse;
  constructor(
    private _api: UserService,
    public router: Router,
    private _builder: FormBuilder
  ) {
    this.signupForm = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
          ),
        ]),
      ],
    });
  }
  login(json) {
    this._api.signInEmailAndPassword(json);
  }
  loginWithGoogle() {
    this._api.loginGoogle();
  }
  ngOnInit(): void {}
}
