import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(valueInMinutes: number): string {
      return moment.utc(moment.duration(valueInMinutes, 'minutes').asMilliseconds()).format('H[h] mm[min]');
  }


}
