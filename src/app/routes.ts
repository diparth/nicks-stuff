import { Ng2StateDeclaration } from '@uirouter/angular';

import { ComingSoonComponent } from './components/coming-soon/coming-soon';

export const DP_ROUTES: Ng2StateDeclaration[] = [
  {
    name: 'base',
    url: '/',
    redirectTo: 'coming-soon'
  },
  {
    name: 'coming-soon',
    url: '/coming-soon',
    component: ComingSoonComponent
  }
];
