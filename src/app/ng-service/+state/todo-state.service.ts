import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BehaviorSubject, map } from 'rxjs';
import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';

interface NgServiceState {
  items: TodoItem[];
}

const initialValue: NgServiceState = {
  items: [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
}

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {

  private readonly _store$ = new BehaviorSubject<NgServiceState>(initialValue);

  public items$ = this._store$.pipe(map((state) => state.items));

  public update($event: TodoItemEvent): void {
    const newState = { ...this._store$.value };
    let updated = newState.items.find((m) => m.id === $event.id);
    if (!updated) return;
    updated.done = $event.done;
    this._store$.next(newState);
  }

  public remove(id: string): void {
    const newState = { ...this._store$.value };
    let index = newState.items.findIndex((m) => m.id === id);
    newState.items.splice(index, 1);
    this._store$.next(newState);
  }

  public add(item: TodoItem): void {
    const newState = { ...this._store$.value };
    newState.items.push(item);
    this._store$.next(newState);
  }
}
