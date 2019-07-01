import { Component, OnInit } from '@angular/core';
import {ServeceService} from '../servece.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
plants: any;
  constructor(private serveceService: ServeceService) {
    this.serveceService.GetPlant().subscribe( data => {
      this.plants = data.plants;
      console.log( this.plants);
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
