import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController ,} from '@angular/common/http/testing';
import { HttpClient , HttpClientModule } from '@angular/common/http';

import { PreguntaRespuestaService } from './PreguntaRespuesta.service';

describe('PreguntaRespuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      // no more boilerplate code w/ custom providers needed :-)
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);
    expect(service).toBeTruthy();
  });
});
