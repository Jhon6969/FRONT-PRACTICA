import { Component, OnInit, Input } from '@angular/core';
import { PlatilloService } from 'src/app/services/platillo/platillo.service';
import { platilloModel } from 'src/models/platillo';

@Component({
  selector: 'app-platillo-actualizar',
  templateUrl: './platillo-actualizar.component.html',
  styleUrls: ['./platillo-actualizar.component.css']
})
export class PlatilloActualizarComponent implements OnInit {

  @Input() datos: any;
  @Input() set cat(value: any){
    this.platillo = value
    console.log(value);
  }
  platillo: platilloModel = new platilloModel();
  constructor(private serviceCat: PlatilloService) { }

  ngOnInit(): void {
  }

  actualizarCategoria(){
    this.serviceCat.putPlatillo(this.platillo._id, this.platillo).then((data: any)=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })
  }
  cancelar(){
    this.datos.platilloR = true;
    this.datos.platilloA = false;
  }

}
