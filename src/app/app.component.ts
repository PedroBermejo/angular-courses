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

  constructor(private coursesServiceService: CoursesServiceService) {}

  ngOnInit() {
    this.courses = this.coursesServiceService.getCourses();
    console.log(this.courses);
    console.log(typeof(this.courses));
  }

  change(event) {
    console.log(event.id);
  }
}
