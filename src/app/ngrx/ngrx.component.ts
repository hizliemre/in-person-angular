import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';
import { TodoStateFacade } from './+state/facade';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
})
export class NgrxComponent {

  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  constructor(public readonly state: TodoStateFacade) { }
}
