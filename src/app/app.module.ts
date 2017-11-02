import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { PendingEmployeeReviewComponent } from './pending-employee-review/pending-employee-review.component';
import { CompletedEmployeeReviewComponent } from './completed-employee-review/completed-employee-review.component';
import { PerformanceRatingComponent } from './performance-rating/performance-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    EmployeeViewComponent,
    PendingEmployeeReviewComponent,
    CompletedEmployeeReviewComponent,
    PerformanceRatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
