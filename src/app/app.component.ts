import {Component, OnInit} from '@angular/core';
import {CoursesServiceService} from './services/courses-service.service';
import {Course} from './interfaces/course';
import {AuthorizationService} from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'epam-angular-training';
  courses: Course[];
  searchTerm: string;
  addingCourse = false;

  constructor(
    private coursesServiceService: CoursesServiceService,
    private authorizationService: AuthorizationService
  ) {}

  ngOnInit() {
    this.courses = this.coursesServiceService.getList();
  }

  delete(event) {
    this.coursesServiceService.removeItem(event.id);
  }

  search(event) {
    this.searchTerm = event;
  }

  isLoggedIn() {
    return this.authorizationService.isAuthenticated();
  }

  adding(event) {
    this.addingCourse = true;
  }
}
