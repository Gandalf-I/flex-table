import { Pipe, PipeTransform } from '@angular/core';
import { FieldId } from '@shared/interfaces/field-id';

@Pipe({
  name: 'filterVisibleColumn',
})
export class FilterVisibleColumnPipe implements PipeTransform {

  transform(arr: FieldId[], arrId: number[], ...args: unknown[]): any {
    return arr.filter(value => arrId.includes(value.fieldId));
  }

}
