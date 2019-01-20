import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ROUTING} from "../../../../../constants/routing";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate([ROUTING.USER.REGISTER_PATH]);
  }

  login() {
    this.router.navigate([ROUTING.USER.LOGIN_PATH]);

  }
}
