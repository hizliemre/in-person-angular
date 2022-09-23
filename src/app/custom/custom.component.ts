import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';
import { TodoStore } from './+state/todo.state';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  standalone: true,
  imports: [CommonModule, TodoListComponent]
})
export class CustomComponent {

  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full';

  constructor(public readonly state: TodoStore) { }

}
