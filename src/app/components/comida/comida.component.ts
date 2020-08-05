import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  datos = {
    categoriaA: false,
    categoriaR: true,
    categoria: true,
    platillo: false,
    platilloR: false,
    platilloA: false,
    platillos: [{}],
    categorias: [{}]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
