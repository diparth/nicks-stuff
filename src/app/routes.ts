import { Ng2StateDeclaration } from '@uirouter/angular';

import { ExperienceComponent } from './old-components/pages/experience/experience';
import { EducationComponent } from './old-components/pages/education/education';
import { ProjectsComponent } from './old-components/pages/projects/projects';
import { ContactsComponent } from './old-components/pages/contacts/contacts';
import { AboutComponent } from './old-components/pages/about/about';
import { ComingSoonComponent } from './components/coming-soon/coming-soon';

export const DP_ROUTES: Ng2StateDeclaration[] = [
  {
    name: 'base',
    url: '/',
    redirectTo: 'coming-soon'
  },
  {
    name: 'about',
    url: '/about',
    component: AboutComponent
  },
  {
    name: 'education',
    url: '/education',
    component: EducationComponent
  },
  {
    name: 'experience',
    url: '/experience',
    component: ExperienceComponent
  },
  {
    name: 'projects',
    url: '/projects',
    component: ProjectsComponent
  },
  {
    name: 'contact',
    url: '/contact',
    component: ContactsComponent
  },
  {
    name: 'coming-soon',
    url: '/coming-soon',
    component: ComingSoonComponent
  }
];
