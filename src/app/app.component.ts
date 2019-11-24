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
    this.courses = this.coursesServiceService.getList();
  }

  delete(event) {
    this.coursesServiceService.removeItem(event.id);
  }

  search(event) {
    this.searchTerm = event;
  }
}
