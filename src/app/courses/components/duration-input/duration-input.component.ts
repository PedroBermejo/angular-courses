import {Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DurationInputComponent,
    multi: true
  }]
})
export class DurationInputComponent implements ControlValueAccessor {
  value: number;
  onChange: (event) => void;
  onTouched: () => void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: number): void {
    this.value = value;
  }

}
