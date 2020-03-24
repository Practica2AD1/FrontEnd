import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionComponent } from './cotizacion.component';

describe('CotizacionComponent', () => {
  let component: CotizacionComponent;
  let fixture: ComponentFixture<CotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Creado Correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('Servicio actual debe de estar vacio', () => {
    expect(component.currentServicio).toBeNull();
  });

  it('Metodo redondear debe de retornar un numero con un maximo de 2 decimales', () => {
    expect(component.redondear(10.16666667)).toEqual(10.17);
  });

  it('Metodo generarTotal debe de ser igual o mayor a 0', () => {
    expect(component.generarTotal()).toBeGreaterThanOrEqual(0);
  });

  it('Metodo isNumber valida si la entrada es un numero', () => {
    expect(component.isNumber(1000)).toBeTruthy();
  })
});
