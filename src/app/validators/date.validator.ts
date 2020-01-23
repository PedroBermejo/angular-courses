import {AbstractControl} from '@angular/forms';

export function germanDate(control: AbstractControl) {
  const dateRegEx = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
  return dateRegEx.test(control.value) ? null : {germanDate: true};
}
