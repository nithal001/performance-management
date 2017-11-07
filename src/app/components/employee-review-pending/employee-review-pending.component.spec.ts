import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReviewPendingComponent } from './employee-review-pending.component';

describe('EmployeeReviewPendingComponent', () => {
  let component: EmployeeReviewPendingComponent;
  let fixture: ComponentFixture<EmployeeReviewPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReviewPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReviewPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
