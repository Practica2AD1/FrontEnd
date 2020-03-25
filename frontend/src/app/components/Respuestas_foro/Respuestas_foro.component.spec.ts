import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaforoComponent } from './Respuestas_foro.component';

describe('RespuestaforoComponent', () => {
  let component: RespuestaforoComponent;
  let fixture: ComponentFixture<RespuestaforoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaforoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Creado Correctamente', () => {
    expect(component).toBeTruthy();
  });
});
