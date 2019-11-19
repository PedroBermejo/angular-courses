import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../interfaces/course';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(list: Course[], type: string): Course[] {
    if (!list || !type) {
      return list;
    }

    return list.sort((a, b) =>
      new Date(b[type]).getTime() - new Date(a[type]).getTime());
  }

}
