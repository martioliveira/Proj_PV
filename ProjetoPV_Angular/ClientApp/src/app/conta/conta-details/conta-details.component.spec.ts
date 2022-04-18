import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaDetailsComponent } from './conta-details.component';

describe('ContaDetailsComponent', () => {
  let component: ContaDetailsComponent;
  let fixture: ComponentFixture<ContaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
