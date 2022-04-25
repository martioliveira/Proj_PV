import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosListComponent } from './objetivos-list.component';

describe('ObjetivosListComponent', () => {
  let component: ObjetivosListComponent;
  let fixture: ComponentFixture<ObjetivosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
