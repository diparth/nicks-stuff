import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BodyComponent } from './body/body';
import { BaseComponent } from './base/base';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { SpotlightComponent } from './spotlight/spotlight';
import { AboutComponent } from './pages/about/about';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import {DP_ROUTES} from './routes';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    SpotlightComponent,
    AboutComponent
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
