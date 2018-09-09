import { Ng2StateDeclaration } from '@uirouter/angular';
import { AboutComponent } from './pages/about/about';

export const DP_ROUTES: Ng2StateDeclaration[] = [
  {
    name: 'base',
    url: '/',
    redirectTo: 'about'
  },
  {
    name: 'about',
    url: '/about',
    component: AboutComponent
  },
  {
    name: 'education',
    url: '/education'
  },
  {
    name: 'experience',
    url: '/experience'
  },
  {
    name: 'projects',
    url: '/projects'
  },
  {
    name: 'contact',
    url: '/contact'
  }
];
