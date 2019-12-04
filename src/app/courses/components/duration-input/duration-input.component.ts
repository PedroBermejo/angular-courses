import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnInit {
  @Output() durationChanged = new EventEmitter();
  @Input() duration: number;

  constructor() { }

  ngOnInit() {
  }

  inputChanged() {
    this.durationChanged.next(this.duration);
  }

}
