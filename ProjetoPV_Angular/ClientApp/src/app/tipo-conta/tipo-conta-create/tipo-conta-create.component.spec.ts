import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaCreateComponent } from './tipo-conta-create.component';

describe('TipoContaCreateComponent', () => {
  let component: TipoContaCreateComponent;
  let fixture: ComponentFixture<TipoContaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoContaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
