import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TodoItem, TodoItemComponent, TodoItemEvent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [CommonModule, TodoItemComponent]
})
export class TodoListComponent {

  @Input() items!: TodoItem[];

  public itemValueChanged($event: TodoItemEvent): void {
    console.log($event);
  }

}
