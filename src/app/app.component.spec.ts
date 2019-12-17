import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoursesService } from './services/courses.service';
import data from '../assets/courses-list.json';
import { Course } from './interfaces/course';
import { CoursesModule } from './courses/courses.module';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {

  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: CoursesService;
  const courseList: Course[] = <any> data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ CoursesService ],
      imports: [
        CoursesModule,
        CoreModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent =  fixture.componentInstance;
    service = TestBed.get(CoursesService);
  }));

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should populate courses', () => {
    spyOn(service, 'getList').and.returnValue(courseList);

    appComponent.ngOnInit();
    expect(appComponent.courses).toBeTruthy();
    expect(service.getList).toHaveBeenCalled();
  });

});
