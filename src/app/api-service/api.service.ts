import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private db: AngularFireDatabase) {
  }

  public getEmployeeData(): Observable<any> {
      return this.db.list('employee').valueChanges();
  }
}
