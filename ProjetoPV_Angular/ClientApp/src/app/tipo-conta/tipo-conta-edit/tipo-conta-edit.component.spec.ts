import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaEditComponent } from './tipo-conta-edit.component';

describe('TipoContaEditComponent', () => {
  let component: TipoContaEditComponent;
  let fixture: ComponentFixture<TipoContaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoContaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
