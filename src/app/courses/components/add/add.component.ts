import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private router: Router) { }

  addNewCourse() {
    this.router.navigate(['courses', 'new'], {});
  }


}
