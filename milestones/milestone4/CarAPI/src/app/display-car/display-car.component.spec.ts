import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarComponent } from './display-car.component';

describe('DisplayCarComponent', () => {
  let component: DisplayCarComponent;
  let fixture: ComponentFixture<DisplayCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCarComponent]
    });
    fixture = TestBed.createComponent(DisplayCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
