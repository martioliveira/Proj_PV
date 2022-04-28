import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosDetailsComponent } from './objetivos-details.component';

describe('ObjetivosDetailsComponent', () => {
  let component: ObjetivosDetailsComponent;
  let fixture: ComponentFixture<ObjetivosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
