import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base/base';
import { HeaderComponent } from './header/header';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ BaseComponent ]
})
export class AppModule { }
