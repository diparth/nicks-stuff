import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DP_ROUTES } from './routes';
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
    UIRouterModule.forRoot({ states: DP_ROUTES })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
