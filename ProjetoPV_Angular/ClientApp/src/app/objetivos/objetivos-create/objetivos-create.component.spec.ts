import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosCreateComponent } from './objetivos-create.component';

describe('ObjetivosCreateComponent', () => {
  let component: ObjetivosCreateComponent;
  let fixture: ComponentFixture<ObjetivosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
