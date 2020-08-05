import { Component, OnInit } from '@angular/core';
import { categoriaModel } from '../../../../models/categoria';

@Component({
  selector: 'app-categoria-registrar',
  templateUrl: './categoria-registrar.component.html',
  styleUrls: ['./categoria-registrar.component.css']
})
export class CategoriaRegistrarComponent implements OnInit {

  categoria: categoriaModel;
  constructor() { }

  ngOnInit(): void {
  }
  registrarCategoria(){
    
  }

}
