import { Component, OnInit } from '@angular/core';
import { ColumnSetting } from '../../model/model';
import { SharedService } from '../../shared-service/shared.service';
interface EmployeeData {
  name: string;
  dueDate: string;
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
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
      this.getReviewPendingData();
  }

  public getReviewPendingData() {
      this.sharedService.getEmployeeData()
        .subscribe(
            data => {
                this.dataSet = data;
                this.employeeData = this.dataSet['employee'].filter((obj) => {
                    return obj.reviewStatus == false;
                });
            }
        );
  }

}
