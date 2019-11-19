import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPipe } from './sort-by.pipe';
import { FilterByPipe } from './filter-by.pipe';
import { TimeFormatPipe } from './time-format.pipe';



@NgModule({
  declarations: [SortByPipe, FilterByPipe, TimeFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [SortByPipe, FilterByPipe, TimeFormatPipe]
})
export class PipesModule { }
