import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service/api.service';
import { ColumnSetting } from '../../model/model';
interface EmployeeData {
    name: string;
    completedDate: string;
    rating: string;
}

@Component({
  selector: 'app-employee-review-completed',
  templateUrl: './employee-review-completed.component.html',
  styleUrls: ['./employee-review-completed.component.css']
})
export class EmployeeReviewCompletedComponent implements OnInit {
  public dataSet: any;
  public reviewCompletedList: EmployeeData[] = [];
  public configSetting: ColumnSetting[] = [
      {
          primaryKey: 'name',
          header: 'Name'
      },
      {
          primaryKey: 'completedDate',
          header: 'Completed Date'
      },
      {
          primaryKey: 'averageRating',
          header: 'Rating'
      }
  ];
  private employeeId: string = 'id';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.getCompletedList();
  }

  public getCompletedList() {
      this.apiService.getEmployeeData()
          .subscribe(
              data => {
                  this.dataSet = data;
                  this.reviewCompletedList = this.dataSet.filter((obj) => {
                      return obj.reviewStatus == true;
                  });
              }
          );
  }

}
