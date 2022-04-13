import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCreateComponent } from './conta-create.component';

describe('ContaCreateComponent', () => {
  let component: ContaCreateComponent;
  let fixture: ComponentFixture<ContaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
