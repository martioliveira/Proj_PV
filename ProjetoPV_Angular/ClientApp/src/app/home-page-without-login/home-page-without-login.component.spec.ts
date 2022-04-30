import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWithoutLoginComponent } from './home-page-without-login.component';

describe('HomePageWithoutLoginComponent', () => {
  let component: HomePageWithoutLoginComponent;
  let fixture: ComponentFixture<HomePageWithoutLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageWithoutLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageWithoutLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
