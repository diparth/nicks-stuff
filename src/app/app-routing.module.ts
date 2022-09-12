import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './components/coming-soon/coming-soon';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'coming-soon'
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
