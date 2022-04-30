import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;

  constructor(private userService: AuthorizeService) { }

  ngOnInit(): void {
    this.userService.isAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

}
