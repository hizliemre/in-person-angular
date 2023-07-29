import { Injectable, computed, effect, signal } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';

interface SignalState {
  items: TodoItem[];
}

const initialValue: SignalState = {
  items: [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
}

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {

  private readonly _state = signal(initialValue);

  public readonly items = computed(() => this._state().items);

  private _added$ = effect(() => {
    console.log('Added: ', this._state().items)
  })

  public update($event: TodoItemEvent): void {
    this._state.update((state) => ({
      ...state,
      items: state.items.map((item) => item.id === $event.id ? { ...item, done: $event.done } : item)
    }));
  }

  public remove(id: string): void {
    this._state.update((state) => ({ ...state, items: state.items.filter((item) => item.id !== id) }));
  }

  public add(item: TodoItem): void {
    this._state.update((state) => ({ ...state, items: [...state.items, item] }));
  }

}
