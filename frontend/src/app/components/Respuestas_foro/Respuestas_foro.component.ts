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

  private resp : string;
  private resp1 : string;
 
  constructor( private serv :PreguntaRespuestaService) { }
  
  ngOnInit() {
    
    this.prguntas = this.serv.obtener_pregunta();
    
   const json ={
      estadoRespuesta:1

    }
 
    
    this.serv.update_pregunta(1,JSON.stringify(json)).subscribe();


  }

  Responder(){
    
    console.log(this.resp);
    console.log(this.resp1);
    const update ={
      estadoRespuesta:1

    }
   
  const post ={
    respuesta: this.resp,
    RESPUESTA_idPregunta :this.resp1

  }
    this.serv.agregar_respuesta(JSON.stringify(post)).subscribe();
    this.serv.update_pregunta(this.resp1,JSON.stringify(update)).subscribe();

    this.prguntas = this.serv.obtener_pregunta();
    
  }

}