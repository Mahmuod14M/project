import { Component, OnInit } from '@angular/core';
import {ServeceService} from '../servece.service';
declare var $: any;
@Component({
  selector: 'app-jion-us',
  templateUrl: './jion-us.component.html',
  styleUrls: ['./jion-us.component.css']
})
export class JionUsComponent implements OnInit {
  public userData : any;
  register(form) {
      const signUpData = {
        email: form.value.Uemail,
        last_name: form.value.Lname,
        first_name: form.value.Fname,
        password: form.value.password,
        phone: form.value.phone,
      };
      this.serveceService.signUp(signUpData).subscribe(data => {
        console.log(data);
        localStorage.setItem('signData', JSON.stringify(data));
        this.userData = localStorage.getItem('signData');
      });
      // $('form input').val('');
  }
  constructor(private serveceService: ServeceService) { }

  ngOnInit() {
  }

}
