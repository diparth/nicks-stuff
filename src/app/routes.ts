import { Ng2StateDeclaration } from '@uirouter/angular';
import { AboutComponent } from './pages/about/about';

export const DP_ROUTES: Ng2StateDeclaration[] = [
  {
    name: 'about',
    url: '/',
    component: AboutComponent
  },
  {
    name: 'education',
    url: '/edu'
  },
  {
    name: 'experience',
    url: '/exp'
  }
];
