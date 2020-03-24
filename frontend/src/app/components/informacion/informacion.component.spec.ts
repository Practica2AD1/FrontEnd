import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComponent } from './informacion.component';

describe('InformacionComponent', () => {
  let component: InformacionComponent;
  let fixture: ComponentFixture<InformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
