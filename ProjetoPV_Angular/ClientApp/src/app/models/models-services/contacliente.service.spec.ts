import { TestBed } from '@angular/core/testing';

import { ContaclienteService } from './contacliente.service';

describe('ContaclienteService', () => {
  let service: ContaclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
