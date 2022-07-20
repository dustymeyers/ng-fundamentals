import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {dispaly: none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent implements OnInit {
  constructor(public auth: AuthService ) {}

  ngOnInit(): void { }
}
