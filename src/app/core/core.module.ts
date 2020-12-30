import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { LayoutModule } from '@layouts/layout.module';

@NgModule({
  imports: [
    CommonModule,
    NzMessageModule,
    LayoutModule,
  ],
  declarations: [],
})
export class CoreModule { }
