import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyAuthGuard } from '@core/guards/only-auth.guard';
import { AppWrapperComponent } from '@layouts/app-wrapper/app-wrapper.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    canActivate: [OnlyAuthGuard],
    component: AppWrapperComponent,
    children: [
      {
        path: 'publication',
        loadChildren: () => import('@pages/publication/publication.module').then(m => m.PublicationModule),
      },
      {
        path: '**',
        redirectTo: 'publication',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
