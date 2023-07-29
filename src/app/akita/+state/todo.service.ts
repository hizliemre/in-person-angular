import { Injectable } from '@angular/core';
import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { TodosStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private store: TodosStore) { }

  public add(item: TodoItem) {
    this.store.add(item);
  }

  public update($event: TodoItemEvent) {
    this.store.update($event.id, { done: $event.done });
  }

  public remove(id: string) {
    this.store.remove(id);
  }
}
