import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TodoItem {
  id: string;
  done: boolean;
  title: string;
}

export interface TodoItemEvent {
  id: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class TodoItemComponent {
  @Input() public item!: TodoItem;
  @Output() public valueChange = new EventEmitter<TodoItemEvent>();

  public valueChanged(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.valueChange.emit({ id: this.item.id, done: element.checked });
  }
}
