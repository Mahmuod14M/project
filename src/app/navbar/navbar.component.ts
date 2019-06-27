import { Component, OnInit } from '@angular/core';
import {ServeceService} from '../servece.service';
import {StorageService} from '../storage.service';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userData: any;

  logIn(form) {
    this.storageService.logIn(form);
  }
  constructor(private serveceService: ServeceService , private storageService: StorageService) { }
  logInBtn() {
    $('#login').click(() => {
      $('.login').show(1000);
    });
  }
  logOutBtn() {
    $('#logout').click( () => {
      localStorage.removeItem('signData');
      this.serveceService.LogOut().subscribe(data => {
      });
    });
  }

  ngOnInit() {

    this.storageService.getUserObservable().subscribe({
      next: logIn => {
        this.logIn = JSON.parse(logIn);
        console.log('navBar');
        console.log(this.logIn);
      },
      error: err => {
        console.log('has Error');
        console.log(err);
      }
    });
    window.scrollTo(0, 0);
    this.userData = JSON.parse(localStorage.getItem('signData'));
    console.log(this.userData);
    $('#alert').click(() => {
      $('.notifications').slideToggle(1000);
    });
    $('#jionUs').click(() => {
      $('.login').hide(1000);
    });
    $('#logInbtn').click(() => {
      $('.login').hide(1000);
    });
    $('#close').click(() => {
      $('.login').hide(1000);
    });
  }

}
