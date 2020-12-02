import { Component, Input, OnInit } from '@angular/core';
import { getGenre } from '../../utils';
import truncateString from '../../utils';
@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css', '../responsive.styles.css'],
})
export class MovieComponent implements OnInit {
  constructor() {}
  @Input() film: any;
  truncate = (str) => {
    return truncateString(str, 150);
  };
  getGenres() {
    let genres = '';
    this.film.genre_ids.map((val) => (genres += getGenre(val) + ', '));
    const aux = genres.substr(0, genres.length - 2);
    return aux;
  }
  ngOnInit(): void {}
}
