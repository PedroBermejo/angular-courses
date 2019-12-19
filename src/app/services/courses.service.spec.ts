import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import {Course} from '../interfaces/course';

describe('CoursesServiceService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    }).compileComponents();
    service = TestBed.get(CoursesService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain values in courses', () => {
    const actual: Course[] = service.getList();

    expect(actual).toBeTruthy();
    expect(actual.length).toBe(4);
    expect(actual[0].id).toBe(177777);
  });

});
