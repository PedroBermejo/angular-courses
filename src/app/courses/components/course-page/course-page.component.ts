import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CoursesService} from '../../../services/courses.service';
import {Course} from '../../../interfaces/course';
import {fromEvent, Observable, Subject, Subscription} from 'rxjs';
import {SearchComponent} from '../search/search.component';
import {distinctUntilChanged, filter, finalize, map, switchMap, takeUntil, throttleTime} from 'rxjs/operators';
import {LoadingService} from '../../../services/loading.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, AfterViewInit, OnDestroy {
  courses: Course[];
  courses$: Observable<Course[]>;
  search$: Subscription;
  showLoadMore = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild('inputChild', {read: ViewContainerRef, static: false}) inputChild: ViewContainerRef;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService ) { }

  ngOnInit() {
    this.getCoursesListByCount(4);
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
          this.loadingService.togleLoading(true);
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
      this.loadingService.togleLoading(false);
      }, error => {
      console.log(error);
      this.loadingService.togleLoading(false);
    }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  delete(event) {
    this.loadingService.togleLoading(true);
    this.coursesService.removeItem(event.id).subscribe(() => {
      this.getCoursesListByCount(4);
      this.loadingService.togleLoading(false);
    });
  }

  loadMore() {
    const count = this.courses.length + 4;
    this.getCoursesListByCount(count);
  }

  getCoursesListByCount(count: number) {
    this.courses$ = this.coursesService.retrieveListByCount(count);
    this.loadingService.togleLoading(true);
    this.courses$.pipe(
      finalize(() => this.loadingService.togleLoading(false))
    ).subscribe(data => {
      if (data) {
        this.courses = data;
      }
    });
  }
}
