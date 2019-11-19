import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  @Output() term =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.term.next(this.searchTerm);
  }

}
