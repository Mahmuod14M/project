import { Component, OnInit } from '@angular/core';
import {ServeceService} from '../servece.service';
declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
plants: any;
 landArea= 0;
 plants='';
 acre= 0;
 Fertilizer=0;
  constructor(private serveceService: ServeceService) {
    this.serveceService.GetPlant().subscribe( data => {
      this.plants = data.plants;
      console.log( this.plants);
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    $('.ADD').click( () => {
    
    this.landArea=$('#landArea').val();
    this.plants=$('#plants').val();
    $('#card').css('opacity','1');
    this.acre=1200*this.landArea;
    this.Fertilizer=600*this.landArea;
    });
    
  }

}
