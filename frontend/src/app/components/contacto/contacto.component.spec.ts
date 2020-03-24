import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoComponent ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Creado Correctamente, Proveeidio del servicio', () => {
    expect(component).toBeTruthy();
  });

  it(`comrprobar imagen not found`, () => {
    const fixture = TestBed.createComponent(ContactoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.imagen.pathImagen).toEqual('assets/pictures/404.jpg');
  });
});
