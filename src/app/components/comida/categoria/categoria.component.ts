import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from '../../../services/categoria/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  cargando = true;
  @Input() datos: any;
  searchText: any;
  constructor(private serviceCat: CategoriaService ) { 
    
  }

  ngOnInit(): void {
    this.serviceCat.getCategoria().then((data: any)=>{
      this.datos.categorias = data.cont;
      this.cargando = false;
    }).catch(err=>{
      console.log(err);
    });
  }

  actualizar(p){
    this.datos.categoriaUno = p;
    this.datos.categoriaR = false;
    this.datos.categoriaA = true;
  }
    desactivar(p){

    }
    platillos(p){
     this.datos.platillos = true;
    }

    exportarEnExcel(){

    }
    exportarEnPDF(){
      
    }

}
