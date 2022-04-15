import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaListComponent } from './tipo-conta-list.component';

describe('TipoContaListComponent', () => {
  let component: TipoContaListComponent;
  let fixture: ComponentFixture<TipoContaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoContaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
