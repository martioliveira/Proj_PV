import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTransacoesListComponent } from './pag-transacoes-list.component';

describe('PagTransacoesListComponent', () => {
  let component: PagTransacoesListComponent;
  let fixture: ComponentFixture<PagTransacoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagTransacoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagTransacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
