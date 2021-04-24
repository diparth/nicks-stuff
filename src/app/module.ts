import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BodyComponent } from './body/body';
import { BaseComponent } from './base/base';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { SpotlightComponent } from './spotlight/spotlight';
import { AboutComponent } from './pages/about/about';
import { DP_ROUTES } from './routes';
import { ContactsComponent } from './pages/contacts/contacts';
import { EducationComponent } from './pages/education/education';
import { ExperienceComponent } from './pages/experience/experience';
import { ProjectsComponent } from './pages/projects/projects';

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
    ProjectsComponent
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
