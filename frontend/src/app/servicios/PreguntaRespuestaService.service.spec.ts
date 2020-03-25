import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import {  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PreguntaRespuestaService } from './PreguntaRespuesta.service';
import { ServiceService } from '../services/service.service';

describe('PreguntaRespuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      // no more boilerplate code w/ custom providers needed :-)
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);
    expect(service).toBeTruthy();
  });


 

 

  it('Servicio Creado Correctamente', () => {
    const servicios: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);
    const json ={
      respuesta: "preuba",
      RESPUESTA_idPregunta:1

    }
    servicios.agregar_respuesta(JSON.stringify(json));
  });




  it('Servicio Creado Correctamente', () => {
    const servicios: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);
    const json ={
      estadoRespuesta:1

    }
    servicios.update_pregunta(1,JSON.stringify(json));
  });

  
 
  it('Servicio Creado Correctamente', () => {
    const servicios: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);

    expect (servicios.obtener_respuesta()).toBeTruthy();
    
  });

  it('Servicio Creado Correctamente', () => {
    const servicios: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);
  
    expect (servicios.obtener_pregunta()).toBeTruthy();
   
  });


  describe('#handleError', () => {
    it('should throw an error when 404', () => {
      const servicios: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not found'
      });
      const errorEv = new ErrorEvent('404');
      const errorResponse_2 = new HttpErrorResponse({
        error: errorEv,
        status: 404,
        statusText: 'Not found'
      });

      expect(servicios.handleError(errorResponse)).toBeTruthy();
      expect(servicios.handleError(errorResponse_2)).toBeTruthy()
    });
  });


});
