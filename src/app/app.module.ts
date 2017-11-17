import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/firebase.config';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { RatingModule } from "ngx-rating";

import { ApiService } from './api-service/api.service';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { PerformanceRatingComponent } from './components/performance-rating/performance-rating.component';
import { EmployeeReviewPendingComponent } from './components/employee-review-pending/employee-review-pending.component';
import { EmployeeReviewCompletedComponent } from './components/employee-review-completed/employee-review-completed.component';
import { DatatableComponent } from './components/shared/datatable/datatable.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeRatingComponent } from './components/employee-rating/employee-rating.component';
import { StarReviewComponent } from './components/shared/star-review/star-review.component';

import { AppPipeModule }    from './app-pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    EmployeeViewComponent,
    PerformanceRatingComponent,
    EmployeeReviewPendingComponent,
    EmployeeReviewCompletedComponent,
    DatatableComponent,
    EmployeeInfoComponent,
    EmployeeRatingComponent,
    StarReviewComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpModule,
    AppRoutingModule,
    RatingModule,
    AppPipeModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
