import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationComponent } from '@pages/publication/publication.component';

const routes: Routes = [
  {
    path: '',
    component: PublicationComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('./table-settings/table-settings.module').then(m => m.TableSettingsModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./publication-edit/publication-edit.module').then(m => m.PublicationEditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationRoutingModule { }
