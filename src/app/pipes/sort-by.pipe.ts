import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(list: any[], type: string): any {
    if (!list || !type) {
      return list;
    }

    return list.sort((item1, item2) => {
      if (item1[type] < item2[type]) {
        return -1;
      } else if (item1[type] > item2[type]) {
        return 1;
      }
      return 0;
    } );
  }

}
