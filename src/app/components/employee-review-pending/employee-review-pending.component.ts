import { Component, OnInit } from '@angular/core';
import { ColumnSetting } from '../../model/model';
import { ApiService } from '../../api-service/api.service';
interface EmployeeData {
  id?: string;
  name?: string;
  dueDate?: string;
}
@Component({
  selector: 'app-employee-review-pending',
  templateUrl: './employee-review-pending.component.html',
  styleUrls: ['./employee-review-pending.component.css']
})
export class EmployeeReviewPendingComponent implements OnInit {
  public dataSet:any[];
  public employeeData: EmployeeData[] = [];
  public employeeSetting: ColumnSetting[] = [
      {
          primaryKey: 'name',
          header: 'Name'
      },
      {
          primaryKey: 'dueDate',
          header: 'Due Date'
      }
  ];
  private employeeId: string = 'id';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.getReviewPendingData();
  }

  public getReviewPendingData() {
      this.apiService.getEmployeeData()
        .subscribe(
            data => {
                this.dataSet = data;
                this.employeeData = this.dataSet.filter((obj) => {
                    return obj.reviewStatus == false;
                });
            }
        );
  }

}
