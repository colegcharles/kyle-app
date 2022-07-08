import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  screenWidth = 0;
  screenHeight = 0;
  menu = false;
  ngOnInit(): void {

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log(this.screenHeight, this.screenWidth)
    this.setMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log(this.screenHeight, this.screenWidth)
    this.setMenu();
  }


  setMenu() {
    if (this.screenWidth <= 888) {
      this.menu = true;
    } else {
      this.menu = false;
    }
  }

}
