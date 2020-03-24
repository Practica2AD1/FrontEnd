import { Component, OnInit } from '@angular/core';
import {Respuestas} from '../../modelos/respuestas';
import {Pregunta} from '../../modelos/pregunta';
import {PreguntaRespuestaService} from '../../servicios/PreguntaRespuesta.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-cotizacion',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class faqComponent implements OnInit  {

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