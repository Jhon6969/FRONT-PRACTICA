import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  cargando = true;
  @Input() datos: any;
  searchText: any;
  constructor() { }

  ngOnInit(): void {
  }

  actualizar(p){

  }
    desactivar(p){

    }
    platillos(p){

    }

    exportarEnExcel(){

    }
    exportarEnPDF(){
      
    }

}
