import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationEditRoutingModule } from './publication-edit-routing.module';
import { PublicationEditComponent } from './publication-edit.component';

@NgModule({
  declarations: [PublicationEditComponent],
  imports: [
    CommonModule,
    PublicationEditRoutingModule,
  ],
})
export class PublicationEditModule { }
