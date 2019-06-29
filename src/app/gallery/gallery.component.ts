import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    window.scrollTo(0, 0);
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
    $('#card4').mouseenter(() => {
      $('#innerCard4').slideDown(1000);
    });
    $('#card4').mouseleave(() => {
      $('#innerCard4').slideUp(1000);
    });
  }

}
