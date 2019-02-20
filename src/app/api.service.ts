import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    const endPoint = 'api.openweathermap.org/data/2.5/weather?q=';
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};

  }



};
