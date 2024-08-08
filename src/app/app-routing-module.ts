import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from './constants/enums';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: RouteNames.HOME, pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./flxtremee/flxtremee.module').then((app) => app.FlxtremeeModule),
  },
  { path: RouteNames.LOGIN, component: LoginComponent },
  { path: RouteNames.ERROR, component: ErrorComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
