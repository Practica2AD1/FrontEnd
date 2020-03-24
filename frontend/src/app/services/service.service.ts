import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  URL = 'https://analisis1practica.herokuapp.com/api/taller/foto';
  constructor(private http: HttpClient) { }

  getImagen(nombre: string){
    return this.http.get<Imagen>(this.URL+`/${nombre}`);
  }
}
