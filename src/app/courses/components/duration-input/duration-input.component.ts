import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

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
export class DurationInputComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  value: number;
  onChange: (event) => void;
  onTouched: () => void;
  errorSquare = false;
  @Input() form: FormGroup;
  unsubscribe$ = new Subject<void>();

  ngAfterViewInit(): void {
    this.form.get('length').statusChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(statusChange => {
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

  writeValue(value: number): void {
    this.value = value;
  }

}
