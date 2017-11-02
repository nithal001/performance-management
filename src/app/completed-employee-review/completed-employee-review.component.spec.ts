import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedEmployeeReviewComponent } from './completed-employee-review.component';

describe('CompletedEmployeeReviewComponent', () => {
  let component: CompletedEmployeeReviewComponent;
  let fixture: ComponentFixture<CompletedEmployeeReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedEmployeeReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedEmployeeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
