import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaEditComponent } from './conta-edit.component';

describe('ContaEditComponent', () => {
  let component: ContaEditComponent;
  let fixture: ComponentFixture<ContaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
