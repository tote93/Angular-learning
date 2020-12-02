import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FetchFilmsService } from 'src/app/services/fetch-films.service';
import { MovieComponent } from '../movie/movie.component';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../../reducers/modal.state';
import { SET_STATUS } from '../../actions/modal.actions';
import { Observable } from 'rxjs';
import { IModal } from 'src/app/interfaces/modal.model';
import movieTrailer from 'movie-trailer';
import truncateString from '../../utils';
@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css', '../responsive.styles.css'],
})
export class BannerComponent implements OnInit {
  @select() activeModal: Observable<IModal>;
  currentModalState: IModal;
  background: string = 'https://image.tmdb.org/t/p/original/';
  videoUrl: string = '';
  constructor(
    private _http: FetchFilmsService,
    public dialog: MatDialog,
    private ngRedux: NgRedux<AppState>
  ) {}
  trendingMovie: any;
  fetchStatus: boolean = true;
  truncate = (str) => {
    return truncateString(str, 200);
  };

  ngOnInit(): void {
    this._http
      .getFilm('/movie/popular?language=en-US&page=1')
      .subscribe((films) => {
        const randValue = Math.floor(Math.random() * 20);
        this.trendingMovie = films.results[randValue];
        this.background += films.results[randValue].backdrop_path;
      });

    this.activeModal.subscribe((current) => (this.currentModalState = current));
  }
  ngAfterContentChecked(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (this.trendingMovie && this.fetchStatus) {
      this.fetchStatus = false;
      movieTrailer(
        this.trendingMovie.name ||
          this.trendingMovie.title ||
          this.trendingMovie.original_title ||
          ''
      ).then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        this.videoUrl = urlParams.get('v');
      });
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(MovieComponent);
    const instance = dialogRef.componentInstance;
    instance.film = this.trendingMovie;
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
