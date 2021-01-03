import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationEditRoutingModule } from './publication-edit-routing.module';
import { PublicationEditComponent } from './publication-edit.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexInputsModule } from '@shared/components/flex-inputs/flex-inputs.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [PublicationEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublicationEditRoutingModule,
    NzDrawerModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    FlexInputsModule,
    NzButtonModule,
  ],
})
export class PublicationEditModule { }
