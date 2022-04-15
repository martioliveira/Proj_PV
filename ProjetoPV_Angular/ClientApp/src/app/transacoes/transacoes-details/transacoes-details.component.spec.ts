import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacoesDetailsComponent } from './transacoes-details.component';

describe('TransacoesDetailsComponent', () => {
  let component: TransacoesDetailsComponent;
  let fixture: ComponentFixture<TransacoesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacoesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacoesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
