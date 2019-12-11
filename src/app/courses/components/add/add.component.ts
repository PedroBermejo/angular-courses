import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewCourse() {
    this.router.navigate(['courses', 'new'], {});
  }


}
