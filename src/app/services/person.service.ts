import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/');
  }

}
