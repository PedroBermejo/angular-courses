import {Component, OnInit} from '@angular/core';
import {CoursesServiceService} from './services/courses-service.service';
import {Course} from './interfaces/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'epam-angular-training';
  courses: Course[];
  searchTerm: string;

  constructor(private coursesServiceService: CoursesServiceService) {}

  ngOnInit() {
    this.courses = this.coursesServiceService.getCourses();
  }

  delete(event) {
    console.log(event.id);
    const index = this.courses.findIndex(item => item.id === event.id );
    this.courses.splice(index, 1);
  }

  search(event) {
    this.searchTerm = event;
  }
}
