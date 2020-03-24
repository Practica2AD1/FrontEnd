import { Component, OnInit } from '@angular/core';
import {Respuestas} from '../../modelos/respuestas';
import {Pregunta} from '../../modelos/pregunta';
import {PreguntaRespuestaService} from '../../servicios/PreguntaRespuesta.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-cotizacion',
  templateUrl: './Respuestas_foro.component.html',
  styleUrls: ['./Respuestas_foro.component.css']
})

export class RespuestaforoComponent implements OnInit  {

  prguntas : Observable<Pregunta>;
  respuestas : Observable<Respuestas>;

  constructor( private serv :PreguntaRespuestaService) { }

  ngOnInit() {
    
    this.prguntas = this.serv.obtener_pregunta();
    this.respuestas = this.serv.obtener_respuesta();
 /*   const json ={
      estadoRespuesta:1

    }
 
    
    this.serv.update_pregunta(1,JSON.stringify(json)).subscribe();
*/

  }



}