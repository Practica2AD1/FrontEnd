import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComponent } from './informacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InformacionComponent', () => {
  let component: InformacionComponent;
  let fixture: ComponentFixture<InformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Creado Correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia de verse la foto inicial', () => {
    expect(component.currentPhoto).toEqual(0);
  });

  it('deberia mostrar la imagen anterior', () => {
    component.prev();
  });

  it('deberia mostrar la imagen siguiente', () => {
    component.next();
  });

});
