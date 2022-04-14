import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacoesCreateComponent } from './transacoes-create.component';

describe('TransacoesCreateComponent', () => {
  let component: TransacoesCreateComponent;
  let fixture: ComponentFixture<TransacoesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacoesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacoesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
