import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/firebase.config';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PerformanceRatingComponent } from './components/performance-rating/performance-rating.component';
import { EmployeeReviewPendingComponent } from './components/employee-review-pending/employee-review-pending.component';
import { EmployeeReviewCompletedComponent } from './components/employee-review-completed/employee-review-completed.component';
import { DatatableComponent } from './components/datatable/datatable.component';

import { ApiService } from './api-service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    EmployeeViewComponent,
    PerformanceRatingComponent,
    EmployeeReviewPendingComponent,
    EmployeeReviewCompletedComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
