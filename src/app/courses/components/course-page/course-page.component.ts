import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CoursesService} from '../../../services/courses.service';
import {Course} from '../../../interfaces/course';
import {fromEvent, Observable, Subject, Subscription} from 'rxjs';
import {distinctUntilChanged, filter, finalize, map, switchMap, takeUntil, throttleTime} from 'rxjs/operators';
import {LoadingService} from '../../../services/loading.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as AppActions from './../../../store/app.actions';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, AfterViewInit, OnDestroy {
  courses$: Observable<Course[]>;
  search$: Subscription;
  showLoadMore = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild('inputChild', {read: ViewContainerRef, static: false}) inputChild: ViewContainerRef;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private store: Store<AppState>) {  }

  ngOnInit() {
    this.courses$ = this.store.select( store => store.courses.courses);
    this.store.select(store => store.courses.loading).subscribe(
      data => this.loadingService.togleLoading(data)
    );
    this.store.dispatch(new AppActions.GetCourses(4));
  }

  ngAfterViewInit() {
    const inputText = this.inputChild.element.nativeElement.querySelector('.inner-text');
    this.search$ = fromEvent(inputText, 'keyup').pipe(
      takeUntil(this.destroy$),
      map(() => inputText.value),
      filter(text => !!text),
      distinctUntilChanged(),
      throttleTime(200),
      switchMap( input => {
        if (input.length > 2) {
          this.showLoadMore = false;
          return this.coursesService.retrieveListByString(input);
        } else {
          this.showLoadMore = true;
          return this.coursesService.retrieveListByCount(4);
        }
      } )
    ).subscribe( data => {
      if (data) {
        this.courses = data as Course[];
      }
      }, error => {
      console.log(error);
    }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  delete(event) {
    this.coursesService.removeItem(event.id).subscribe(() => {
      this.store.dispatch(new AppActions.GetCourses( 4));
    });
  }

  loadMore(count: number) {
    this.store.dispatch(new AppActions.GetCourses(count + 4));
  }

}
