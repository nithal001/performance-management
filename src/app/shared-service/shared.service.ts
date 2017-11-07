import { Injectable } from '@angular/core';
import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {
  private url:string = 'assets/data.json';

  constructor(private http: Http) { }

  public getEmployeeData(): Observable<any> {
      return this.http.get(this.url)
         .map(res => res.json());
  }
}
