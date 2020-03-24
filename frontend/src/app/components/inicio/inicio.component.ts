import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mision: Imagen = {
    pathImagen: "assets/pictures/404.jpg"
  };
  vision: Imagen = {
    pathImagen: "assets/pictures/404.jpg"
  };
  
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getImagen('imagen1').subscribe(res => {
      this.mision = res as Imagen;
    });
    this.service.getImagen('imagen7').subscribe(res => {
      this.vision = res as Imagen;
    });
  }
}
