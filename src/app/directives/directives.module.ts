import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedDateDirective } from './created-date.directive';



@NgModule({
  declarations: [CreatedDateDirective],
  imports: [
    CommonModule
  ],
  exports: [CreatedDateDirective]
})
export class DirectivesModule { }
