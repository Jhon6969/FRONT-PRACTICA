import { Component, OnInit, Input } from '@angular/core';
import { categoriaModel } from '../../../../models/categoria';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-categoria-actualizar',
  templateUrl: './categoria-actualizar.component.html',
  styleUrls: ['./categoria-actualizar.component.css']
})
export class CategoriaActualizarComponent implements OnInit {

  @Input() datos: any;
  @Input() set cat(value: any){
    this.categoria = value
    console.log(value);
  }
  categoria: categoriaModel = new categoriaModel();
  constructor(private serviceCat: CategoriaService) { }

  ngOnInit(): void {
  }

  actualizarCategoria(){
    this.serviceCat.putCategoria(this.categoria._id, this.categoria).then((data: any)=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })
  }
  cancelar(){
    this.datos.categoriaR = true;
    this.datos.categoriaA = false;
  }

}
