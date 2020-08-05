import { Component, OnInit, Input } from '@angular/core';
import { platilloModel } from 'src/models/platillo';
import { PlatilloService } from 'src/app/services/platillo/platillo.service';

@Component({
  selector: 'app-platillo-registrar',
  templateUrl: './platillo-registrar.component.html',
  styleUrls: ['./platillo-registrar.component.css']
})
export class PlatilloRegistrarComponent implements OnInit {

  @Input() datos;
  platillo: platilloModel = new platilloModel();
  constructor(private serviceCat: PlatilloService ) { }

  ngOnInit(): void {
    this.platillo.strDescripcion = undefined
    this.platillo.strNombre = ''
  }
  registrarPlatillo(){
    this.serviceCat.postPlatillo(this.platillo).then((data: any)=>{
      console.log(data);
      this.obtenerCat();
      this.platillo.strNombre = undefined;
      this.platillo.strDescripcion = undefined;
      this.platillo.strIngredientes = undefined;
      this.platillo.nmbPiezas = undefined;
      this.platillo.nmbPrecio = undefined;
      this.platillo.blnActivo = undefined;
    }).catch(err=>{
      console.log(err);
    })
  }

  obtenerCat(){
    this.serviceCat.getPlatillo().then((data: any)=>{
      // console.log(data);
      this.datos.platillo = data.cont;
    }).catch(err=>{
      console.log(err);
    });
  }
}
