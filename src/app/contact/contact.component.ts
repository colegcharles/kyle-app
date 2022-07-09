import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  screenWidth = 0;
  screenHeight = 0;
  largeMap = true;
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.setMap();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.setMap();
  }

  setMap() {
    if (this.screenWidth <= 888) {
      this.largeMap = true;
    } else {
      this.largeMap = false;
    }
  }

}
