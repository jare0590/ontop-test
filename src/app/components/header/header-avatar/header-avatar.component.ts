import { Component, Input } from '@angular/core';

@Component({
  selector: 'ontop-header-avatar',
  templateUrl: './header-avatar.component.html',
  styleUrls: ['./header-avatar.component.scss'],
})
export class HeaderAvatarComponent {
  @Input() avatar: string = '';
}
