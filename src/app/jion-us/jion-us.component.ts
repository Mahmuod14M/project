import {Component, OnInit} from '@angular/core';
import {ServeceService} from '../servece.service';
import {StorageService} from '../storage.service';



declare var $: any;

@Component({
  selector: 'app-jion-us',
  templateUrl: './jion-us.component.html',
  styleUrls: ['./jion-us.component.css']
})
export class JionUsComponent implements OnInit {
  public userData: any;
  logIn: any ;
  constructor(private serveceService: ServeceService, private storageService: StorageService) {
    this.storageService.getUserObservable().subscribe({
      next : logIn => {
        this.logIn = logIn;
      }
    });
  }
  USerRegister = (form)  => {
    this.storageService.register(form);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
