import { Component } from '@angular/core';

@Component({
  selector: 'dp-header',
  templateUrl: './header.html',
  styleUrls: [ './header.scss' ]
})

export class HeaderComponent {
  public navMenu: NavItem[] = [
    {
      name: 'About',
      state: 'about'
    },
    {
      name: 'Education',
      state: 'education'
    },
    {
      name: 'Experience',
      state: 'experience'
    },
    {
      name: 'Projects',
      state: 'projects'
    },
    {
      name: 'Contacts',
      state: 'contact'
    }
  ];
}
