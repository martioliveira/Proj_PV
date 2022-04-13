import { TestBed } from '@angular/core/testing';

import { OrcamentocontasService } from './orcamentocontas.service';

describe('OrcamentocontasService', () => {
  let service: OrcamentocontasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrcamentocontasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
