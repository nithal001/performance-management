import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReviewCompletedComponent } from './employee-review-completed.component';

describe('EmployeeReviewCompletedComponent', () => {
  let component: EmployeeReviewCompletedComponent;
  let fixture: ComponentFixture<EmployeeReviewCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReviewCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReviewCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
