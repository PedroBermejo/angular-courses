import { Component, OnInit } from '@angular/core';
import {LoadingService} from '../../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  isLoading = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.getSubject().subscribe(loading => this.isLoading = loading );
  }

}
