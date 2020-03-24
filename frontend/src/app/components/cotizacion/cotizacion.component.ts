import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})

export class CotizacionComponent implements OnInit {

  categorias = [
    {
      nombre: "cat1",
      servicios: [
        {
          id: 1,
          nombre: "nombre",
          descripcion: "descripcion",
          precio: 12.35,
          imagen: "path"
        }
      ]
    }
  ];

  currentServicios = [];

  currentServicio = null;

  servicios = [{
      cantidad: 1,
      servicio: {
        id: 1,
        nombre: "nombre",
        descripcion: "Descripcion del servicio o producto para el cliente...",
        precio: 12.35,
        imagen: "path"
      }
    }];

  nombre: string;
  apellido: string;
  correo: string;
  fecha: string;

  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.correo = "";
    this.fecha = new Date().toLocaleDateString();

    /*
      ir a traer los servicios por categoria y todos los servicios
    */
  }

  ngOnInit() {
  }

  changeNombre(text: any) {
    this.nombre = text;
  }

  changeApellido(text) {
    this.apellido = text;
  }

  changeCorreo(text) {
    this.correo = text;
  }

  changeServicios(text){
    //buscar el servicio y colocarlo en currentServicio
    for(let i = 0; i < this.currentServicios.length; i++) {
      let servicio = this.currentServicios[i];

      if(servicio.nombre === text) {
        this.currentServicio = servicio;
        break;
      }
    }
  }

  changeCategoria(text) {
    //buscar categorias y desplegar la info en currentServicios
    for(let i = 0; i < this.categorias.length; i++) {
      let categoria = this.categorias[i];

      if(categoria.nombre === text) {
        this.currentServicios = categoria.servicios;
        break;
      }
    }
  }

  addServices() {
    if(this.currentServicio !== null) {
      this.servicios.push({
        cantidad: 1,
        servicio: this.currentServicio
      });
    }
  }

  changeCantidad(pos: number, numero) {
    var reg = new RegExp('^[0-9]+$');
    console.log(reg.test(numero));

    if(reg.test(numero)) {
      this.servicios[pos].cantidad = numero;
    }
  }

  eliminarServicio(pos: number) {
    let nuevo = [];
    for(let i = 0; i < this.servicios.length; i ++) {
      if(i !== pos) {
        nuevo.push(this.servicios[i]);
      }
    }

    this.servicios = nuevo;

    console.log(pos);
  }

  generarTotal(): number {
    let total: number = 0;
    for(let i = 0; i < this.servicios.length; i++) {
      total += this.servicios[i].cantidad * this.servicios[i].servicio.precio;
    }
    return this.redondear(total);
  }

  redondear(numero: number) :number{
    return Math.round(numero * 100) / 100;
  }
}
