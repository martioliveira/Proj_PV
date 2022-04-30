import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  isAuthenticated = false;
  isAdmin = false;

  constructor(private userService: AuthorizeService) {}

  ngOnInit() {
    this.userService.isAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    this.userService.isAdmin().subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
