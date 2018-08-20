import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BodyComponent } from './body/body';
import { BaseComponent } from './base/base';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { SpotlightComponent } from './spotlight/spotlight';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    SpotlightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ BaseComponent ]
})
export class AppModule { }
