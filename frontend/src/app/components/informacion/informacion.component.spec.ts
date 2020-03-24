import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComponent } from './informacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InformacionComponent', () => {
  let component: InformacionComponent;
  let fixture: ComponentFixture<InformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ InformacionComponent ]
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

  it('debe iniciar con la foto inicial', () => {
    expect(component.currentPhoto).toEqual(0);
  });
});
