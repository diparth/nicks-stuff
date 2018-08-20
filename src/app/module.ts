import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base/base';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ BaseComponent ]
})
export class AppModule { }
