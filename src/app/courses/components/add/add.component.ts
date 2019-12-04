import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() addingCourse =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.addingCourse.next();
  }

}
