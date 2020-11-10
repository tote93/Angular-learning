import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css'],
})
export class MiComponenteComponent implements OnInit {
  public titulo: string;
  public comentario: string;
  public year: number;
  constructor() {
    this.titulo = 'Este es el titulo del componente';
    this.comentario = 'comentario del componente';
  }
  public testing(): string {
    console.log('entro a testing');
    return 'hola que hase';
  }
  ngOnInit(): void {}
}
