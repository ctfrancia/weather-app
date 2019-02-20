import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { CONSTANTS } from '../_private/Constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  constants = CONSTANTS;

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getWeather(city: string, isoCode: string): Observable<any> {
    return this.http.get(`${this.endPoint}${city},${isoCode}${this.constants.apiKey}`)
    .pipe(map(this.extractData));
  }
};
