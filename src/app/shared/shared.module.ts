import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterVisibleColumnPipe } from './pipes/filter-visible-column.pipe';
import { SortByPriorityPipe } from '@shared/pipes/sort-by-priority.pipe';

@NgModule({
  declarations: [FilterVisibleColumnPipe, SortByPriorityPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterVisibleColumnPipe,
    SortByPriorityPipe,
  ],
})
export class SharedModule { }
