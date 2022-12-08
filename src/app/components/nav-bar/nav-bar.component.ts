import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    alert("Até Logo!");
  };
};
