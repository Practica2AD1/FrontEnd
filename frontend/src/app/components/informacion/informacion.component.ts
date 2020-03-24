import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
https://analisis1practica.herokuapp.com/api/taller/telefono
https://analisis1practica.herokuapp.com/api/taller/correo
https://analisis1practica.herokuapp.com/api/taller/direccion
https://analisis1practica.herokuapp.com/api/taller/nombre
https://analisis1practica.herokuapp.com/api/taller/foto/:string
*/

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  urlEmpresa = {
    telefono: "https://analisis1practica.herokuapp.com/api/taller/telefono",
    correo: "https://analisis1practica.herokuapp.com/api/taller/correo",
    direccion: "https://analisis1practica.herokuapp.com/api/taller/direccion",
    nombre: "https://analisis1practica.herokuapp.com/api/taller/nombre",
    foto: "https://analisis1practica.herokuapp.com/api/taller/foto/:string"
  }

  //solo mostrar estas fotos
  photos = [
    "https://autolab.com.co/wp-content/uploads/2016/09/autolab-taller-mecanica-automotriz.jpg",
    "https://i.pinimg.com/originals/b1/fb/3b/b1fb3bc0c4161cdf7e44ebdc2596fc9b.jpg",
    "https://i2.bssl.es/highmotor/2017/07/taller-mecanico-coche-3.jpg"
  ];
  currentPhoto = 0;

  contactoEmpresa = {
    telefono: "22364578",
    correo: "correo1@gmail.com",
    direccion: "direccion",
    nombre: "nombre",
    foto: "foto"
  };

  constructor(private httpClient: HttpClient) {
    //ir a traer las photos que se guarden desde el servidor
    this.obtenerInfoEmpresa();
  }

  ngOnInit() {
  }

  obtenerInfoEmpresa() {
    this.GetRequest(this.urlEmpresa.telefono).subscribe(data => {
      this.contactoEmpresa.telefono = data.telefono;
    });
    this.GetRequest(this.urlEmpresa.correo).subscribe(data => {
      this.contactoEmpresa.correo = data.correo;
    });
    this.GetRequest(this.urlEmpresa.direccion).subscribe(data => {
      this.contactoEmpresa.direccion = data.direccion;
    });
    this.GetRequest(this.urlEmpresa.nombre).subscribe(data => {
      this.contactoEmpresa.nombre = data.nombreEmpresa;
    });
    /*this.GetRequest(this.urlEmpresa.foto).subscribe(data => {
      this.contactoEmpresa.foto = data.foto;
    });*/
  }

  GetRequest(serverAddress: string): Observable<any> {
    return this.httpClient.get<any>(serverAddress, httpOptions);
  }

  prev() {
    if(this.currentPhoto > 0)
      this.currentPhoto--;
  }

  next() {
    if(this.currentPhoto < this.photos.length-1)
      this.currentPhoto++;
  }
}
