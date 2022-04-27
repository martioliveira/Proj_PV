import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoCreateComponent } from './orcamento-create.component';

describe('OrcamentoCreateComponent', () => {
  let component: OrcamentoCreateComponent;
  let fixture: ComponentFixture<OrcamentoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrcamentoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
