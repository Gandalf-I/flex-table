import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableSettingsRoutingModule } from './table-settings-routing.module';
import { TableSettingsComponent } from './table-settings.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [TableSettingsComponent],
  imports: [
    CommonModule,
    TableSettingsRoutingModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzInputNumberModule,
    NzButtonModule,
    SharedModule,
  ],
})
export class TableSettingsModule { }
