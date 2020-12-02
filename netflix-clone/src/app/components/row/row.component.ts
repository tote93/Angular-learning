import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FetchFilmsService } from 'src/app/services/fetch-films.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieComponent } from '../movie/movie.component';
import { NgRedux, select } from '@angular-redux/store';
import { IModal } from 'src/app/interfaces/modal.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers/modal.state';
import { SET_STATUS } from 'src/app/actions/modal.actions';
@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css', '../responsive.styles.css'],
})
export class RowComponent implements OnInit {
  @Input() url: string;
  @Input() title: string;
  movieList: any;
  @select() activeModal: Observable<IModal>;
  currentModalState: IModal;
  rotationX: number = 0;
  @ViewChild('rowPosters') el: ElementRef;

  rotateCarrousel(direction) {
    if (this.rotationX + direction < 0 && this.rotationX + direction >= -210) {
      const valTranslate = this.rotationX + direction;
      this.el.nativeElement.style.transform = `translateX(${valTranslate}vw)`;
      this.el.nativeElement.style.transition = '1.4s';
      this.rotationX = valTranslate;
    } else {
      const valTranslate = 0;
      this.el.nativeElement.style.transform = `translateX(${valTranslate}vw)`;
      this.el.nativeElement.style.transition = '1.4s';
      this.rotationX = valTranslate;
    }
  }

  constructor(
    private _http: FetchFilmsService,
    public dialog: MatDialog,
    private ngRedux: NgRedux<AppState>
  ) {
    this.activeModal.subscribe((current) => (this.currentModalState = current));
  }
  ngOnInit() {
    this._http.getFilm(this.url).subscribe((films) => {
      return (this.movieList = films.results);
    });
  }
  openDialog(film) {
    const dialogRef = this.dialog.open(MovieComponent);
    const instance = dialogRef.componentInstance;
    instance.film = film;
    this.ngRedux.dispatch({
      type: SET_STATUS,
      status: !this.currentModalState,
    });
    dialogRef.afterClosed().subscribe((_) => {
      this.ngRedux.dispatch({
        type: SET_STATUS,
        status: !this.currentModalState,
      });
    });
  }
}
