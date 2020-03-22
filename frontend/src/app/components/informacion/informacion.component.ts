import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  //solo mostrar estas fotos
  photos = [
    "https://autolab.com.co/wp-content/uploads/2016/09/autolab-taller-mecanica-automotriz.jpg",
    "https://i.pinimg.com/originals/b1/fb/3b/b1fb3bc0c4161cdf7e44ebdc2596fc9b.jpg",
    "https://i2.bssl.es/highmotor/2017/07/taller-mecanico-coche-3.jpg"
  ];
  currentPhoto = 0;

  constructor() { }

  ngOnInit() {
  }
}
