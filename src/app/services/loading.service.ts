import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  subject = new Subject<boolean>();

  togleLoading(loading: boolean) {
    this.subject.next(loading);
  }

  getSubject(): Subject<boolean> {
    return this.subject;
  }

}

