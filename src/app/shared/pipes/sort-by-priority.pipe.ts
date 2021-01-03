import { Pipe, PipeTransform } from '@angular/core';
import { FieldId } from '@shared/interfaces/field-id';

@Pipe({
  name: 'sortByPriority',
})
export class SortByPriorityPipe implements PipeTransform {

  transform(arr: FieldId[], arrId: number[], ...args: unknown[]): any {
    const answerArr = [];
    for (const value of arr) {
      const id = arrId.indexOf(value.fieldId);
      answerArr[id] = value;
    }
    return answerArr;
  }

}
