import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#card').mouseenter(() => {
      $('#innerCard').slideDown(1000);
    });
    $('#card').mouseleave(() => {
      $('#innerCard').slideUp(1000);
    });
    $('#card2').mouseenter(() => {
      $('#innerCard2').slideDown(1000);
    });
    $('#card2').mouseleave(() => {
      $('#innerCard2').slideUp(1000);
    });
    $('#card3').mouseenter(() => {
      $('#innerCard3').slideDown(1000);
    });
    $('#card3').mouseleave(() => {
      $('#innerCard3').slideUp(1000);
    });
    $('.learnMore').click( () => {
      $('html, body').animate({
        scrollTop: $('.outCard').offset().top
      }, 1000);
    } );
  }

}
