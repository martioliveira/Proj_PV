import { TestBed } from '@angular/core/testing';

import { TipotransacaoService } from './tipotransacao.service';

describe('TipotransacaoService', () => {
  let service: TipotransacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipotransacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
