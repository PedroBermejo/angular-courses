import {AfterViewInit, Component, Input} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

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
export class DurationInputComponent implements ControlValueAccessor, AfterViewInit {
  value: number;
  onChange: (event) => void;
  onTouched: () => void;
  errorSquare = false;
  @Input() form: FormGroup;

  ngAfterViewInit(): void {
    this.form.get('length').statusChanges.subscribe(statusChange => {
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

  writeValue(value: number): void {
    this.value = value;
  }

}
