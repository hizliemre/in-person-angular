import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TodoItem, TodoItemComponent, TodoItemEvent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [CommonModule, TodoItemComponent]
})
export class TodoListComponent {

  @Input() items!: TodoItem[];
  @Output() itemAdded = new EventEmitter<TodoItem>();
  @Output() itemUpdated = new EventEmitter<TodoItemEvent>();
  @Output() itemRemoved = new EventEmitter<string>();

  public itemValueChanged($event: TodoItemEvent): void {
    this.itemUpdated.emit($event);
  }

  public add(todoTitle: string): void {
    const item: TodoItem = { id: Guid.create().toString(), title: todoTitle, done: false };
    this.itemAdded.emit(item);
  }

  public remove(id: string): void {
    this.itemRemoved.emit(id);
  }

}
