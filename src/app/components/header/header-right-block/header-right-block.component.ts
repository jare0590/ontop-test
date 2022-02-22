import { Component } from '@angular/core';

@Component({
  selector: 'ontop-header-right-block',
  templateUrl: './header-right-block.component.html',
  styleUrls: ['./header-right-block.component.scss']
})
export class HeaderRightBlockComponent {
  userAvatar: string;

  constructor() {
    this.userAvatar = '/assets/img/avatars/avatar-1.png';
  }
}
