import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { faqComponent } from './faq.component';

describe('faqComponent', () => {
  let component: faqComponent;
  let fixture: ComponentFixture<faqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ faqComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(faqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Creado Correctamente', () => {
    expect(component).toBeTruthy();
  });
});
