import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PerformanceRatingComponent } from './components/performance-rating/performance-rating.component';
import { EmployeeReviewPendingComponent } from './components/employee-review-pending/employee-review-pending.component';
import { EmployeeReviewCompletedComponent } from './components/employee-review-completed/employee-review-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    EmployeeViewComponent,
    PerformanceRatingComponent,
    EmployeeReviewPendingComponent,
    EmployeeReviewCompletedComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
