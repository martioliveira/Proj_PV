import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosEditComponent } from './objetivos-edit.component';

describe('ObjetivosEditComponent', () => {
  let component: ObjetivosEditComponent;
  let fixture: ComponentFixture<ObjetivosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
