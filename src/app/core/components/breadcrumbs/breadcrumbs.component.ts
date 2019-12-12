import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() courseName;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCourses() {
    this.router.navigate(['courses']);
  }

}
