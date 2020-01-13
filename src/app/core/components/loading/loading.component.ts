import { Component } from '@angular/core';
import {LoadingService} from '../../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  loading$ = this.loadingService.getSubject();

  constructor(private loadingService: LoadingService) { }

}
