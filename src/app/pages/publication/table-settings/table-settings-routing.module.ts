import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableSettingsComponent } from '@pages/publication/table-settings/table-settings.component';

const routes: Routes = [
  {
    path: '',
    component: TableSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableSettingsRoutingModule { }
