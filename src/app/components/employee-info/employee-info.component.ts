import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  public dataSet: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
      this.getEmployeeDetails();
  }

  public getEmployeeDetails() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.apiService.getEmployeeById(id)
          .subscribe(
              data => {
                  this.dataSet = data;
              }
         );
  }
}
