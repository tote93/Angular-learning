import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/interfaces/user.response';
import { AppState } from 'src/app/reducers/modal.state';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../responsive.styles.css'],
})
export class HeaderComponent implements OnInit {
  selected: boolean = true;
  active: boolean = false;
  moreOptions: boolean = false;
  user: UserResponse = null;
  photoUrl: string = 'assets/images/user.png';
  displayMenu() {
    this.moreOptions = !this.moreOptions;
  }
  constructor(private ngRedux: NgRedux<AppState>, private _api: UserService) {
    this.user = this.ngRedux.getState().user;
    if (this.user.photoURL) this.photoUrl = this.user.photoURL;
    console.log(this.user.photoURL, this.photoUrl);
  }
  ngOnInit(): void {}
  setActive() {
    this.active = !this.active;
  }
  logOut() {
    this._api.logout();
  }
}
