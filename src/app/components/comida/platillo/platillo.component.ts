import { Component, OnInit, Input } from '@angular/core';
import { PlatilloService } from 'src/app/services/platillo/platillo.service';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {
  cargando = true;
  @Input() datos: any;
  searchText: any;
  constructor(private serviceCat: PlatilloService ) { 
    
  }

  ngOnInit(): void {
    this.serviceCat.getPlatillo().then((data: any)=>{
      this.datos.categorias = data.cont;
      this.cargando = false;
    }).catch(err=>{
      console.log(err);
    });
  }

  actualizar(p){
    this.datos.platillos = p;
    this.datos.platilloR = false;
    this.datos. platilloA = true;
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
