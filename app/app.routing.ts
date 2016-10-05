import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { CreateTeamComponent }      from './create/create-team.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'create',
    component: CreateTeamComponent
  },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);