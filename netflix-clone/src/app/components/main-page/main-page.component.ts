import { Component, OnInit } from '@angular/core';
import data from '../../../mainComponentRowInfo';
@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css', '../responsive.styles.css'],
})
export class MainPageComponent implements OnInit {
  constructor() {}
  jsonData: any[];
  ngOnInit(): void {
    this.jsonData = data;
  }
}
