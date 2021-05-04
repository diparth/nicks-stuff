import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BodyComponent } from './old-components/body/body';
import { AppComponent } from './app/app';
import { HeaderComponent } from './old-components/header/header';
import { SidebarComponent } from './old-components/sidebar/sidebar';
import { SpotlightComponent } from './old-components/spotlight/spotlight';
import { AboutComponent } from './old-components/pages/about/about';
import { DP_ROUTES } from './routes';
import { ContactsComponent } from './old-components/pages/contacts/contacts';
import { EducationComponent } from './old-components/pages/education/education';
import { ExperienceComponent } from './old-components/pages/experience/experience';
import { ProjectsComponent } from './old-components/pages/projects/projects';
import { ComingSoonComponent } from './components/coming-soon/coming-soon';
import { FooterComponent } from './components/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    SpotlightComponent,
    AboutComponent,
    ContactsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ComingSoonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UIRouterModule.forRoot({ states: DP_ROUTES })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
