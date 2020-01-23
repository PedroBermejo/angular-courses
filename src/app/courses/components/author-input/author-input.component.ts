import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import {Author, Tag} from '../../../interfaces/course';
import * as AppActions from '../../../store/app.actions';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TagModel} from 'ngx-chips/core/accessor';
import {Observable, of} from 'rxjs';

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
  onChange: () => void;
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
