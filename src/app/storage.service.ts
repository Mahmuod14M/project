import { Injectable } from '@angular/core';
import {ServeceService} from './servece.service';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private userData: any;
  private log = new Subject<any>();

  constructor(private serviceService: ServeceService) { }
  getUserObservable() {
    return this.log.asObservable();
  }
  register(form) {
    const signUpData = {
      email: form.value.Uemail,
      last_name: form.value.Lname,
      first_name: form.value.Fname,
      password: form.value.password,
      phone: form.value.phone,
    };
    this.serviceService.signUp(signUpData).subscribe(data => {
      console.log(data);
      localStorage.setItem('signData', JSON.stringify(data));
      this.userData = localStorage.getItem('signData');
      this.log.next(this.userData);
    });
  }
  logIn(form) {
    const signUpData = {
      email: form.value.email,
      password: form.value.password
    };
    this.serviceService.signIn(signUpData).subscribe(data => {
      console.log(data);
      localStorage.setItem('signData', JSON.stringify(data));
      this.userData = JSON.parse(localStorage.getItem('signData'));
      this.log.next(this.userData);
    });
  }
}
