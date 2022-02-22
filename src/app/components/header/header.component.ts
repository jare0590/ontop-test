import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMenu } from '../../interfaces/menu.interface';

import { navBarMenuMock } from './_mocks/navbar-menu.mock';

@Component({
  selector: 'ontop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navBarList: IMenu[];

  constructor(
    private router: Router
  ) {
    this.navBarList = [];
  }
  
  ngOnInit(): void {
    this.navBarList = navBarMenuMock;
  }

  logoClick(): void {
    this.router.navigate(['/']);
  }
}