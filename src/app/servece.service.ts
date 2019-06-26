import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
const BASE_URL = 'http://192.168.1.6:5000'

@Injectable({
  providedIn: 'root'
})
export class ServeceService {

  constructor(private httpClient: HttpClient) {
  }

  signUp(payload): Observable<any> {
    return this.httpClient.post(
      BASE_URL + '/user/singup', payload, httpOptions
    );
  }
  signIn(payload): Observable<any> {
    return this.httpClient.post(
      BASE_URL + '/auth/login', payload, httpOptions
    );
  }
}
