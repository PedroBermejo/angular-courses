import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';
import {Component} from '@angular/core';
import {Course} from '../../../interfaces/course';
import data from '../../../../assets/courses-list.json';



describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<TestCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent,
        TestCourseComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCourseComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain values', async(() => {
      expect(component.courseItem.id).toBe(177777);
      expect(component.courseItem.duration).toBe(6000);
      expect(component.courseItem.title).toContain('Introduction to Algorithms, 3rd Edition (The MIT Press)');
  }));
});

@Component({
  template  : '<app-course-item [courseItem]="mockItem"></app-course-item>'
})
class TestCourseComponent {
  private courseList: Course[] = <any> data;
  private mockItem: Course = this.courseList[0];
}
