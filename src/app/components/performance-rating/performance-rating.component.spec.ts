import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceRatingComponent } from './performance-rating.component';

describe('PerformanceRatingComponent', () => {
  let component: PerformanceRatingComponent;
  let fixture: ComponentFixture<PerformanceRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
