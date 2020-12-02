import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserResponse } from 'src/app/interfaces/user.response';

import requests from '../../../requests';
import { IModal } from '../../interfaces/modal.model';
import { AppState } from '../../reducers/modal.state';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  urls = requests;
  @select() activeModal: Observable<IModal>;
  user: UserResponse = null;
  currentModalState: IModal;
  constructor(private ngRedux: NgRedux<AppState>, public router: Router) {
    this.activeModal.subscribe((current) => (this.currentModalState = current));
    this.user = this.ngRedux.getState().user;
  }
  ngOnInit(): void {
    if (this.user === null) this.router.navigate(['']);
  }
}
