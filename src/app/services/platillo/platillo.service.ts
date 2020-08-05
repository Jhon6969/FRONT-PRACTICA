import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  url = `${environment.urlGlobal}`;
  constructor(private httpClient: HttpClient ) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
   }

  getPlatillo(){
    return this.httpClient.get(`${this.url}/Platillo/obtener`).toPromise();
  }

  postPlatillo(categoria: any){
    return this.httpClient.post(`${this.url}/Platillo/registrar`, categoria).toPromise();
  }

  putPlatillo(id:string, categoria: any){
    return this.httpClient.put(`${this.url}/Platillo/modificar/${id}`, categoria).toPromise();
  }

}
