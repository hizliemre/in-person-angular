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
    const currentState = this._store$.value;
    const updatedItems = currentState.items.reduce((prev, curr) => ({ ...prev, [curr.id]: { ...curr, ...$event } }), {});
    const newState = {
      ...currentState,
      items: Object.values(updatedItems) as TodoItem[]
    }
    console.log(newState);
    this._store$.next(newState);
  }
}
