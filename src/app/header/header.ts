import { Component } from '@angular/core';

@Component({
  selector: 'dp-header',
  templateUrl: './header.html',
  styleUrls: [ './header.scss' ]
})

export class HeaderComponent {
  public navMenu: string[] = [
    'About',
    'Education',
    'Experience',
    'Projects',
    'Contact'
  ];
}
