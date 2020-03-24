import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController ,} from '@angular/common/http/testing';

import { ServiceService } from './service.service';
import { Imagen } from '../models/imagen';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';



describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [
      // no more boilerplate code w/ custom providers needed :-)
      HttpClientModule,
      HttpClientTestingModule
    ]

  }));

  it('Servicion Creado Correctamente', () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  });


});
