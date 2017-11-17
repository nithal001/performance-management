import { Component, OnInit } from '@angular/core';
import { ColumnSetting } from '../../model/model';
import { ApiService } from '../../api-service/api.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-employee-rating',
  templateUrl: './employee-rating.component.html',
  styleUrls: ['./employee-rating.component.css']
})
export class EmployeeRatingComponent implements OnInit {
  public dataSet: any;
  public ratingData: any;
  public subscription: Subscription;
  public starsCount: any;
  public jobKnowledge: number;
  public dependability: number;
  public workQuality: number;
  public communicationAbilities: number;
  public flexibility: number;
  public interpersonalSkills: number;
  public initiative: number;
  public organization: number;
  public averageRating: number = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.getEmployeeRating();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  public getEmployeeRating() {
      this.subscription = this.apiService.currentId
                          .subscribe(item => {
                              this.apiService.getEmployeeById(item)
                              .subscribe(data => {
                                  this.dataSet = data;
                                  this.ratingData = data.map((obj) => {
                                      return obj.reviewRatings;
                                  });
                              })
                          });
  }

  public onSelect(value: any, ref: any) {
      debugger;
      this[ref] = value;
      if(this[ref]) {
          let sum = this.jobKnowledge + this. dependability +
                    this.workQuality + this.communicationAbilities +
                    this.flexibility + this.interpersonalSkills +
                    this.initiative + this.organization;
          this.averageRating = Math.floor(sum/8);
      }
  }

}
