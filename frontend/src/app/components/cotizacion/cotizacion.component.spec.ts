import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionComponent } from './cotizacion.component';

describe('CotizacionComponent', () => {
  let component: CotizacionComponent;
  let fixture: ComponentFixture<CotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionComponent]
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

  it('no deberia tener un servicio actual seleccionado', () => {
    expect(component.currentServicio).toBeNull();
  });

  it('deberia redondear numero a dos decimales maximo', () => {
    expect(component.redondear(10.16666667)).toEqual(10.17);
  });

  it('deberia ser mayor o igual a 0', () => {
    expect(component.generarTotal()).toBeGreaterThanOrEqual(0);
  });

  it('deberia ser verdadero si es un numero', () => {
    expect(component.isNumber(1000)).toBeTruthy();
  });

  it(`deberia que cambie nombre`, () => {
    const r = new CotizacionComponent();
    r.changeNombre("juan");
    expect(r.nombre).toEqual("juan")
  });

  it(`deberia que cambie apellido`, () => {
    const r = new CotizacionComponent();
    r.changeApellido("osuna");
    expect(r.apellido).toEqual("osuna")
  });

  it(`deberia que cambie correo`, () => {
    const r = new CotizacionComponent();
    r.changeCorreo("juan@gmail.com");
    expect(r.correo).toEqual("juan@gmail.com")
  });

  it(`deberia que agrege servicio`, () => {
    const r = new CotizacionComponent();
    r.addServices();
  });

  it(`deberia que eliminar servicio`, () => {
    const r = new CotizacionComponent();
    r.eliminarServicio(2);
  });

  it(`retornar un total`, () => {
    const r = new CotizacionComponent();
    r.generarTotal();
  });

  it(`deberia redondear`, () => {
    const r = new CotizacionComponent();
    const numero = r.redondear(4.3);
    expect(numero).toEqual(4.3)
  });

});
