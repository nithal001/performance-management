import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEmployeeReviewComponent } from './pending-employee-review.component';

describe('PendingEmployeeReviewComponent', () => {
  let component: PendingEmployeeReviewComponent;
  let fixture: ComponentFixture<PendingEmployeeReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingEmployeeReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingEmployeeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
