import { Component, OnInit } from '@angular/core';
import { ColumnSetting, ReviewRating } from '../../model/model';
import { ApiService } from '../../api-service/api.service';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-rating',
  templateUrl: './employee-rating.component.html',
  styleUrls: ['./employee-rating.component.css']
})
export class EmployeeRatingComponent implements OnInit {
  public reviewStatus: any;
  public ratingData: any;
  public starCount: any;
  public subscription: Subscription;

  public jobKnowledge: number;
  public dependability: number;
  public workQuality: number;
  public communicationAbilities: number;
  public flexibility: number;
  public interpersonalSkills: number;
  public initiative: number;
  public organization: number;
  public averageRating: number = 0;

  public ratingForm: FormGroup;
  public reviewPath: any;
  public statusPath: any;
  public employeeId: any;

  public status: boolean = false;
  public completedDate: any;
  public thankMessage: boolean = false;

  constructor(private apiService: ApiService,
              private fb: FormBuilder,
              private datePipe: DatePipe) { }

  ngOnInit() {
      this.getEmployeeRating();
      this.buildForm();
      this.getId();
      this.completedDate = this.datePipe.transform(new Date(), 'shortDate');
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  public getEmployeeRating() {
      this.subscription = this.apiService.currentId
                          .subscribe(item => {
                              this.apiService.getEmployeeById(item)
                              .subscribe(data => {
                                  this.reviewStatus = data[0].reviewStatus;
                                  this.averageRating = data[0].averageRating;
                                  this.ratingData = data.map((obj) => {
                                      return obj.reviewRatings;
                                  });
                              })
                          });
  }

  public getId() {
     return this.apiService.currentId
                .subscribe(item => {
                   this.employeeId = item;
                 });
  }

  public onSelect(value: any, ref: any) {
      this[ref] = value;
      if(this[ref]) {
          this.starCount = this.jobKnowledge + this. dependability +
                    this.workQuality + this.communicationAbilities +
                    this.flexibility + this.interpersonalSkills +
                    this.initiative + this.organization;
          this.averageRating = Math.floor(this.starCount/8);
      }
      if(this.starCount >= 0) {
          this.status = true;
      }
  }

  public startNewRating() {
      this.reviewPath = this.apiService.getReviewRatingObject(this.employeeId);
      this.statusPath = this.apiService.getEmployeeRatingObject(this.employeeId);
      this.patchForm();
      if (this.ratingForm.status != 'VALID') {
        console.log('form is not valid, cannot save to database')
        return
      }
      const ratingFormData = this.ratingForm.value
      const statusUpdateData = {
          averageRating: this.averageRating,
          reviewStatus: true,
          completedDate: this.completedDate
      }
      this.apiService.updateReviewRating(this.reviewPath, ratingFormData);
      this.apiService.updateEmployeeRatingStatus(this.statusPath, statusUpdateData);
      this.thankMessage = true;
      setTimeout(() => {
          this.thankMessage = false;
      }, 3000);
  }


  public buildForm() {
    this.ratingForm = this.fb.group({
      comments:  ['', Validators.required ],
      jobKnowledge: '',
      dependability: '',
      workQuality: '',
      communicationAbilities: '',
      flexibility: '',
      interpersonalSkills: '',
      initiative: '',
      organization: ''
    });
  }

  public patchForm() {
      this.ratingForm.patchValue({
          jobKnowledge: this.jobKnowledge,
          dependability: this.dependability,
          workQuality: this.workQuality,
          communicationAbilities: this.communicationAbilities,
          flexibility: this.flexibility,
          interpersonalSkills: this.interpersonalSkills,
          initiative: this.initiative,
          organization: this.organization
      })
  }

}
