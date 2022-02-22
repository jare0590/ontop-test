import { Component, Input } from "@angular/core";

import { IMenu } from '../../../interfaces/menu.interface';

@Component({
  selector: 'ontop-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent {
  @Input() navBarList: IMenu[] = [];
}