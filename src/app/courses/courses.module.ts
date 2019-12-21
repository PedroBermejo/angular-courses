import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { AddComponent } from './components/add/add.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import {FormsModule} from '@angular/forms';
import {DirectivesModule} from '../directives/directives.module';
import {PipesModule} from '../pipes/pipes.module';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import {LoginModule} from '../login/login.module';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SearchComponent,
    AddComponent,
    CourseItemComponent,
    NewCourseComponent,
    DateInputComponent,
    DurationInputComponent,
    CoursePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PipesModule,
    LoginModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    CoursePageComponent
  ]
})
export class CoursesModule { }
