import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import constants from '../_private/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint: string = 'api.openweathermap.org/data/2.5/weather?q=';
  private httpOptions: object = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    console.log('BODY: ', body);

    return body || {};
  }

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.endPoint} ${constants.apiKey}` + city)
    .pipe(map(this.extractData));
  }
};
