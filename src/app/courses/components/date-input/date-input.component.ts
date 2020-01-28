import {AfterViewInit, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DateInputComponent,
    multi: true
  }]
})
export class DateInputComponent implements ControlValueAccessor, AfterViewInit {
  value: string;
  onChange: (event) => void;
  onTouched: () => void;
  errorSquare = false;
  @Input() form: FormGroup;

  ngAfterViewInit() {
    this.form.get('date').statusChanges.subscribe(statusChange => {
      if (statusChange === 'INVALID') {
        this.errorSquare = true;
      } else {
        this.errorSquare = false;
      }
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }
}
