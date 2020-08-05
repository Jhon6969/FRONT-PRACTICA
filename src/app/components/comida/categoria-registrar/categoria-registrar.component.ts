import { Component, OnInit, Input } from '@angular/core';
import { categoriaModel } from '../../../../models/categoria';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categoria-registrar',
  templateUrl: './categoria-registrar.component.html',
  styleUrls: ['./categoria-registrar.component.css']
})
export class CategoriaRegistrarComponent implements OnInit {

  @Input() datos;
  categoria: categoriaModel = new categoriaModel();
  constructor(private serviceCat: CategoriaService ) { }

  ngOnInit(): void {
    this.categoria.strDescripcion = undefined
    this.categoria.strNombre = ''
  }
  registrarCategoria(){
    this.serviceCat.postCategoria(this.categoria).then((data: any)=>{
      console.log(data);
      this.obtenerCat();
      this.categoria.strNombre = undefined;
      this.categoria.strDescripcion = undefined;
      this.categoria.blnActivo = undefined
    }).catch(err=>{
      console.log(err);
    })
  }

  obtenerCat(){
    this.serviceCat.getCategoria().then((data: any)=>{
      // console.log(data);
      this.datos.categorias = data.cont;
    }).catch(err=>{
      console.log(err);
    });
  }

}
