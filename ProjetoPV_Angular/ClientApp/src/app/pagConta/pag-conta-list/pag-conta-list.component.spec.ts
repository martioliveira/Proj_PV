import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagContaListComponent } from './pag-conta-list.component';

describe('PagContaListComponent', () => {
  let component: PagContaListComponent;
  let fixture: ComponentFixture<PagContaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagContaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagContaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
