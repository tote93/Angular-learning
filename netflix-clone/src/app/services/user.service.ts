import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserResponse } from '../interfaces/user.response';
import { AppState } from '../reducers/modal.state';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserResponse;
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    private ngRedux: NgRedux<AppState>
  ) {}
  loginGoogle() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((data) => {
        this.ngRedux.dispatch({
          type: 'SET_USER',
          user: data.user,
        });
        this.router.navigate(['/home']);
      });
  }
  async signInEmailAndPassword(json) {
    await this.auth
      .signInWithEmailAndPassword('igorej@hotmail.com', 'admin1234')
      .then((data) => {
        this.ngRedux.dispatch({
          type: 'SET_USER',
          user: data.user,
        });
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        alert('Error with email and password');
      });
    //
  }
  logout() {
    this.auth.signOut();
    this.user = null;
    this.router.navigate(['/']);
  }
}
