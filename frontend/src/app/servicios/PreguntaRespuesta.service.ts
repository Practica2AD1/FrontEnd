import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Respuestas} from '../modelos/respuestas';
import {Pregunta} from '../modelos/pregunta';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreguntaRespuestaService {

  private  url: string; 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }


  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error:', error.error.message);
    }else{
      console.error(
        `Codigo de Error: ${error.status}, `+
        `cuerpo del error: ${error.error}`
      );
    }
    return throwError(
      'Algo salio muy mal.'
    );
  };

  constructor(private http: HttpClient) { }

  obtener_respuesta(){
    this.url ="https://analisis1practica.herokuapp.com/api/respuesta";
    return this.http.get<Respuestas>(this.url).pipe();

  }
  obtener_pregunta(){
    
    this.url ="https://analisis1practica.herokuapp.com/api/pregunta";
    return this.http.get<Pregunta>(this.url).pipe();


  }


  update_pregunta(id, estado): Observable<void> {
    
    this.url = "https://analisis1practica.herokuapp.com/api/pregunta/"+id;
    
    var datos= this.http.put<void>(this.url,estado,this.httpOptions).pipe(/*retry(2),*/catchError(this.handleError)/**/)
    console.log(datos);
   
    return datos;

  }
  
  agregar_respuesta(nueva): Observable<void> {
    
    this.url = "https://analisis1practica.herokuapp.com/api/respuesta";
    
    var datos= this.http.post<void>(this.url,nueva,this.httpOptions).pipe(/*retry(2),*/catchError(this.handleError)/**/)
    console.log(datos);
   
    return datos;

  }
  
}
