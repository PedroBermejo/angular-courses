import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): any {
    return `${Math.floor(value / 60)}h ${value % 60}min`;
  }

}
