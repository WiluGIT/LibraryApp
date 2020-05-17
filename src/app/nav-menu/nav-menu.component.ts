import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  // isLogged: boolean;
  // isAdmin: boolean;
  isExpanded = false;
  constructor(private authService:AuthService){}

  ngOnInit(){
    // this.isLogged = this.authService.isAuthenticated().s;
    // this.isAdmin = this.authService.isAdmin();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout(){
    this.authService.logout();

  }

}
