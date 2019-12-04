import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../interfaces/course';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
  @Output() dateChanged = new EventEmitter();
  date: string;

  constructor() { }

  ngOnInit() {
  }

  inputChanged() {
    this.dateChanged.next(this.date);
  }



}
