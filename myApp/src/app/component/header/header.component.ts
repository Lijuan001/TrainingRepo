import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showMessage() {
    this.router.navigate(['message']);
  }

  login() {
    this.router.navigate(['login']);
  }

  gotoUsers() {
    this.router.navigate(['users']);
  }

  myCounter() {
    this.router.navigate(['mycounter']);
  }

}
