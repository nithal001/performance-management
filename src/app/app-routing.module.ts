import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';

const appRoutes: Routes = [
    {
        path: 'employee-details',
        component: EmployeeViewComponent
    },
    {
        path: '',
        component: EmployeeListComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
