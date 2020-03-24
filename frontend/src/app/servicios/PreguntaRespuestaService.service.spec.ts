import { TestBed } from '@angular/core/testing';

import { PreguntaRespuestaService } from './PreguntaRespuesta.service';

describe('PreguntaRespuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreguntaRespuestaService = TestBed.get(PreguntaRespuestaService);
    expect(service).toBeTruthy();
  });
});
