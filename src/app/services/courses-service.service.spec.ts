import { TestBed } from '@angular/core/testing';
import { CoursesServiceService } from './courses-service.service';
import {Course} from '../interfaces/course';

describe('CoursesServiceService', () => {
  let service: CoursesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesServiceService]
    }).compileComponents();
    service = TestBed.get(CoursesServiceService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain values in courses', () => {
    const actual: Course[] = service.getCourses();

    expect(actual).toBeTruthy();
    expect(actual.length).toBe(4);
    expect(actual[0].id).toBe(177777);
  });

});
