import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';
import { NgxsTodoListState } from './+state/state';
import { NgxsComponent } from './ngxs.component';

@NgModule({
  declarations: [NgxsComponent],
  imports: [CommonModule, TodoListComponent, NgxsModule.forFeature([NgxsTodoListState])],
  exports: [NgxsComponent],
})
export class NgxsSampleModule { }
