import { Component, OnInit } from '@angular/core';
import {ServeceService} from '../servece.service';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userData: any;
  logIn(form) {
    const signUpData = {
      email: form.value.email,
      password: form.value.password
    };
    this.serveceService.signIn(signUpData).subscribe(data => {
      console.log(data);
      localStorage.setItem('signData', JSON.stringify(data));
      this.userData = localStorage.getItem('signData');
    });
    // $('form input').val('');
  }
  constructor(private serveceService: ServeceService) { }

  ngOnInit() {
    console.log(this.userData);
    $('#alert').click(() => {
      $('.notifications').slideToggle(1000);
    });
    $('#login').click(() => {
      $('.login').show(1000);
    });
    $('#jionUs').click(() => {
      $('.login').hide(1000);
    });
    $('#logInbtn').click(() => {
      $('.login').hide(1000);
    });
  }

}
