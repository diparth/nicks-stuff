import { Ng2StateDeclaration } from '@uirouter/angular';
import { AboutComponent } from './old-components/pages/about/about';
import { EducationComponent } from './old-components/pages/education/education';
import { ExperienceComponent } from './old-components/pages/experience/experience';
import { ProjectsComponent } from './old-components/pages/projects/projects';
import { ContactsComponent } from './old-components/pages/contacts/contacts';

export const DP_ROUTES: Ng2StateDeclaration[] = [
  {
    name: 'base',
    url: '/'
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
  }
];
