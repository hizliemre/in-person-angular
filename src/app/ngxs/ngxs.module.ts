import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';
import { NgxsComponent } from './ngxs.component';

@NgModule({
  declarations: [NgxsComponent],
  imports: [CommonModule, TodoListComponent],
  exports: [NgxsComponent],
})
export class NgxsSampleModule { }
