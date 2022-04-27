import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoEditComponent } from './orcamento-edit.component';

describe('OrcamentoEditComponent', () => {
  let component: OrcamentoEditComponent;
  let fixture: ComponentFixture<OrcamentoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcamentoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
