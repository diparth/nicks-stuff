import { Ng2StateDeclaration } from '@uirouter/angular';
import { AboutComponent } from './pages/about/about';
import { EducationComponent } from './pages/education/education';
import { ExperienceComponent } from './pages/experience/experience';
import { ProjectsComponent } from './pages/projects/projects';
import { ContactsComponent } from './pages/contacts/contacts';

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
