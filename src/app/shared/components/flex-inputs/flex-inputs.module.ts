import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexInputsComponent } from '@shared/components/flex-inputs/flex-inputs.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  declarations: [FlexInputsComponent],
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule,
    NzDatePickerModule,
  ],
  exports: [
    FlexInputsComponent,
  ],
})
export class FlexInputsModule { }
