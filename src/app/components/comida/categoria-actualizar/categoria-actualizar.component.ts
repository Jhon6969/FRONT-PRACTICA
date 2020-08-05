import { Component, OnInit } from '@angular/core';
import { categoriaModel } from '../../../../models/categoria';

@Component({
  selector: 'app-categoria-actualizar',
  templateUrl: './categoria-actualizar.component.html',
  styleUrls: ['./categoria-actualizar.component.css']
})
export class CategoriaActualizarComponent implements OnInit {

  categoria: categoriaModel;
  constructor() { }

  ngOnInit(): void {
  }

  actualizarCategoria(){

  }

}
