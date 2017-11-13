import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private db: AngularFireDatabase) {
  }

  public getEmployeeData(): Observable<any> {
      return this.db.list('employee').valueChanges();
  }

  public getEmployeeById(id: any): Observable<any> {
      let uid = id;
      return this.db.list('employee', ref => ref.orderByChild('id').equalTo(uid)).valueChanges();
  }

}
