import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
export class DateInputComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  value: string;
  onChange: (event) => void;
  onTouched: () => void;
  errorSquare = false;
  @Input() form: FormGroup;
  unsubscribe$ = new Subject<void>();

  ngAfterViewInit() {
    this.form.get('date').statusChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(statusChange => {
      if (statusChange === 'INVALID') {
        this.errorSquare = true;
      } else {
        this.errorSquare = false;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
