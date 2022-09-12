import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app';
import { ComingSoonComponent } from './components/coming-soon/coming-soon';
import { FooterComponent } from './components/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
