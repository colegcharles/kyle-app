import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  screenWidth = 0;
  screenHeight = 0;
  menu = false;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.setMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.setMenu();
  }


  setMenu() {
    if (this.screenWidth <= 888) {
      this.menu = true;
    } else {
      this.menu = false;
    }
  }

  goToContact() {
    this.router.navigate(['/', 'contact']);
  }
  goHome() {
    this.router.navigate(['/'])
  }
}
