import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from '../constants/enums';
import { HomeComponent } from './home/home.component';
import { FlxtremeeComponent } from './flxtremee.component';

export const routes: Routes = [
  {
    path: '',
    component: FlxtremeeComponent,
    children: [
      {
        path: '',
        redirectTo: RouteNames.HOME,
        pathMatch: 'full',
      },
      {
        path: RouteNames.HOME,
        component: HomeComponent,
        canActivate: [],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlxtremeeRoutingModule {}
