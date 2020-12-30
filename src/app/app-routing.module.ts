import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyAuthGuard } from '@core/guards/only-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    canActivate: [OnlyAuthGuard],
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
