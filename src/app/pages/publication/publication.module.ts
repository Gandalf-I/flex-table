import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { PublicationComponent } from './publication.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PublicationComponent],
  imports: [
    CommonModule,
    PublicationRoutingModule,
    NzTableModule,
    SharedModule,
  ],
})
export class PublicationModule { }
