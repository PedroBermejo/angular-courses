import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { AddComponent } from './components/add/add.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import {FormsModule} from '@angular/forms';
import {DirectivesModule} from '../directives/directives.module';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [SearchComponent, AddComponent, CourseItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PipesModule
  ],
  exports: [
    AddComponent,
    SearchComponent,
    CourseItemComponent
  ]
})
export class CoursesModule { }
