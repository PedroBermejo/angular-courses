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
  @Output() tagsChange: EventEmitter = new EventEmitter();


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
    this.authors = this.authors.filter(item => item.id !== event.id);
    this.tagsChange.next(this.authors);
  }

  onTagAdd(event) {
    const names = event.display.split(' ');
    this.authors.push({id: event.id, name: names[0] , lastName: names[1]});
    this.tagsChange.next(this.initialTags);
  }
}
