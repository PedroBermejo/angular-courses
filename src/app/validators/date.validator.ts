import {AbstractControl} from '@angular/forms';
import * as moment from 'moment';

export function germanDate(control: AbstractControl) {
  const dateRegEx = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
  if (dateRegEx.test(control.value)) {
    return moment(control.value, 'DD/MM/YYYY').isValid() ? null : {germanDate: true};
  } else {
    return  {germanDate: true} ;
  }

}
