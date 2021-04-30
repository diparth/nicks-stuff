import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BodyComponent } from './old-components/body/body';
import { BaseComponent } from './base/base';
import { HeaderComponent } from './old-components/header/header';
import { SidebarComponent } from './old-components/sidebar/sidebar';
import { SpotlightComponent } from './old-components/spotlight/spotlight';
import { AboutComponent } from './old-components/pages/about/about';
import { DP_ROUTES } from './routes';
import { ContactsComponent } from './old-components/pages/contacts/contacts';
import { EducationComponent } from './old-components/pages/education/education';
import { ExperienceComponent } from './old-components/pages/experience/experience';
import { ProjectsComponent } from './old-components/pages/projects/projects';
import { ComingSoonComponent } from './coming-soon/coming-soon';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    SpotlightComponent,
    AboutComponent,
    ContactsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UIRouterModule.forRoot({ states: DP_ROUTES })
  ],
  providers: [],
  bootstrap: [ BaseComponent ]
})
export class AppModule { }
