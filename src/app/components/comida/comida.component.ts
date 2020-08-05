import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria/categoria.service';

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
    categorias: [{}],
    categoriaUno: {}
  }
  constructor(private serviceCat: CategoriaService) { }

  ngOnInit(): void {
    
  }

}
