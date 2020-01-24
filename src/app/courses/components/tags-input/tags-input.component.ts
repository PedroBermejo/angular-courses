import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {Author, Tag} from '../../../interfaces/course';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from '../../../store/app.actions';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css']
})
export class TagsInputComponent implements AfterViewInit {

  public tags: Tag[] = [];
  initialTags: Tag[] = [];
  @Input() authors: Author[];
  @Output() tagsChange = new EventEmitter();
  @Output() onBlur = new EventEmitter();


  constructor(private store: Store<AppState>) {
    this.store.dispatch(AppActions.getAuthors({}));
    this.store.select(storeData => storeData.courses.authors).subscribe(
      data => {
        if (data) {
          data.forEach( item => {
            this.tags.push({display: item.name, value: item.id});
          });
        }
      }
    );
  }

  ngAfterViewInit() {
    this.authors.forEach(author => {
      this.initialTags.push({display: author.name + ' ' + author.lastName, value: author.id});
    });
  }

  onTagRemove(event) {
    const id = this.authors.findIndex( item => item.id === event.value);
    this.authors.splice(id, 1);
    this.tagsChange.next(this.authors);
  }

  onTagAdd(event) {
    const names = event.display.split(' ');
    this.authors.push({id: event.value, name: names[0] , lastName: names[1]});
    this.tagsChange.next(this.authors);
  }

  onInputBlur() {
    this.onBlur.next();
  }
}
