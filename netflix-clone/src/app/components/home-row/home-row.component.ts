import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-row',
  templateUrl: './home-row.component.html',
  styleUrls: ['./home-row.component.css', '../responsive.styles.css'],
})
export class HomeRowComponent implements OnInit {
  constructor() {}
  @Input() data: any;
  styles: any;
  ngOnInit(): void {
    this.styles = this.data.styles;
  }
}
