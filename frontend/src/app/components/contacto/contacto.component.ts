import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  dev1 = {
    nombre: "Juan Pablo Osuna de Leon",
    correo: "juanpabloosuna1997@gmail.com"
  }
  dev2 = {
    nombre: "Jhonatan Leonel López Santos",
    correo: "jhony@gmail.com"
  }
  dev3 = {
    nombre: "Diego Josue Berrios Gutierrez",
    correo: "diego@gmail.com"
  }
  dev4 = {
    nombre: "Carlos Luis Pablo Hernández Gramajo",
    correo: "carlos@gmail.com"
  }
  dev5 = {
    nombre: "Mario Obed Morales Guitz",
    correo: "mario@gmail.com"
  }

  devs: any[] =  [ this.dev1,this.dev2,this.dev3,this.dev4,this.dev5]

  constructor() { }

  ngOnInit() {
  }

}
