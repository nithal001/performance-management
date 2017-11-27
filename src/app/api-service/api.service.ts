import { Injectable } from '@angular/core';
import { ReviewRating, EmployeeRating } from '../model/model';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ApiService {
  private itemValue = new BehaviorSubject<number>(0);
  public currentId = this.itemValue.asObservable();
  constructor(private db: AngularFireDatabase) {
  }

  public getEmployeeData(): Observable<any> {
      return this.db.list('employee').valueChanges();
  }

  public getEmployeeById(id: any): Observable<any> {
      let uid = id;
      return this.db.list('employee', ref => ref.orderByChild('id').equalTo(uid)).valueChanges();
  }

  public emitCurrentIdUpdate(id) {
      this.itemValue.next(id);
  }

  public getReviewRatingObject(id: any): AngularFireObject<ReviewRating> {
        let uid = id - 1;
        return this.db.object(`/employee/${uid}/reviewRatings`)
  }

  public updateReviewRating(fb: AngularFireObject<ReviewRating>, data: any) {
    return fb.update(data)
  }

  public getEmployeeRatingObject(id: any): AngularFireObject<EmployeeRating> {
        let uid = id - 1;
        return this.db.object(`/employee/${uid}/`)
  }

  public updateEmployeeRatingStatus(fb: AngularFireObject<EmployeeRating>, data: any) {
    return fb.update(data)
  }

}
