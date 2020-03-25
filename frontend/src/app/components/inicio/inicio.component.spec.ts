import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InicioComponent } from './inicio.component';
import { ServiceService } from '../../services/service.service';
import { Imagen } from 'src/app/models/imagen';
import { exec } from 'child_process';
import { HttpClient } from '@angular/common/http';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent],
      imports: [HttpClientTestingModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Creado Correctamente, Proveeidio del servicio', () => {
    expect(component).toBeTruthy();
  });



  it('Servicio Creado Correctamente', () => {
    component.vision.pathImagen="";
    component.ngOnInit();
  });
  
  
});
