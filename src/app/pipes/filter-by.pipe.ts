import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(list: any[], type: string, value: string): any {
    if (!list || !type || !value) {
      return list;
    }

    return list.forEach(item =>
      item[type].toUpperCase().includes(value.toUpperCase()));
  }

}
