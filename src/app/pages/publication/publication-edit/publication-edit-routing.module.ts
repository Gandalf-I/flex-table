import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationComponent } from '@pages/publication/publication.component';

const routes: Routes = [
  {
    path: '',
    component: PublicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationEditRoutingModule { }
