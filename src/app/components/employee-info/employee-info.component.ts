import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  public dataSet: any;
  public subscription: Subscription;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
      this.getEmployeeDetails();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  public getEmployeeDetails() {
    this.subscription = this.apiService.currentId
                        .subscribe(item => {
                            this.apiService.getEmployeeById(item)
                                .subscribe(data => this.dataSet = data);
                        });
  }
}
