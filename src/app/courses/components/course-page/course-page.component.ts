import {AfterViewInit, Component, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {CoursesService} from '../../../services/courses.service';
import {Course} from '../../../interfaces/course';
import {fromEvent, Observable, of, Subject} from 'rxjs';
import {distinctUntilChanged, map, switchMap, takeUntil, throttleTime} from 'rxjs/operators';
import {LoadingService} from '../../../services/loading.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from './../../../store/app.actions';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements AfterViewInit, OnDestroy {
  courses$: Observable<Course[]> = this.store.select( store => store.courses.courses);
  showLoadMore = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild('inputChild', {read: ViewContainerRef, static: false}) inputChild: ViewContainerRef;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private store: Store<AppState>) {
    this.store.select(storeData => storeData.courses.loading).subscribe(
      data => this.loadingService.togleLoading(data)
    );
    this.store.dispatch(AppActions.getCourses({ count: 4 }));
  }

  ngAfterViewInit() {
    const inputText = this.inputChild.element.nativeElement.querySelector('.inner-text');
    fromEvent(inputText, 'keyup').pipe(
      takeUntil(this.destroy$),
      map(() => inputText.value),
      distinctUntilChanged(),
      throttleTime(200),
      switchMap( (input: string) => {
        if (input.length > 2) {
          this.showLoadMore = false;
          this.store.dispatch(AppActions.getStringCourses({query: input}));
        } else {
          this.showLoadMore = true;
          this.store.dispatch(AppActions.getCourses({ count: 4 }));
        }
        return of({});
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  delete(event) {
    this.store.dispatch(AppActions.deleteCourse({id: event.id}));
  }

  loadMore(count: number) {
    this.store.dispatch(AppActions.getCourses({ count: count + 4 }));
  }

}
