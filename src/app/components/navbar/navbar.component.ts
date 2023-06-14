import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuUser:boolean = false;

  constructor(private router: Router) { }

  openMenuUser(){
    this.menuUser = !this.menuUser;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
