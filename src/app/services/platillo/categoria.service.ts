import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = `${environment.urlGlobal}`;
  constructor(private httpClient: HttpClient ) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
   }

  getCategoria(){
    return this.httpClient.get(`${this.url}/categoria/obtener`).toPromise();
  }

  postCategoria(categoria: any){
    return this.httpClient.post(`${this.url}/categoria/registrar`, categoria).toPromise();
  }

  putCategoria(id:string, categoria: any){
    return this.httpClient.put(`${this.url}/categoria/modificar/${id}`, categoria).toPromise();
  }

}
