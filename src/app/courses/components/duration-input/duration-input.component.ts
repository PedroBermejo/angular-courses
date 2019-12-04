import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnInit {
  @Output() durationChanged = new EventEmitter();
  duration: number;

  constructor() { }

  ngOnInit() {
  }

  inputChanged() {
    this.durationChanged.next(this.duration);
  }

}
