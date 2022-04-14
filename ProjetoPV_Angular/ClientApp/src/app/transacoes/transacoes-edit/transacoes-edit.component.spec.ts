import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacoesEditComponent } from './transacoes-edit.component';

describe('TransacoesEditComponent', () => {
  let component: TransacoesEditComponent;
  let fixture: ComponentFixture<TransacoesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacoesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacoesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
