import { Component } from '@angular/core';
import {Author} from '../../../interfaces/course';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-author-input',
  templateUrl: './author-input.component.html',
  styleUrls: ['./author-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AuthorInputComponent,
    multi: true
  }]
})
export class AuthorInputComponent implements ControlValueAccessor {
  authors: Author[];
  onChange: (event) => void;
  onTouched: () => void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(authors: Author[]): void {
    this.authors = authors;
  }

}
