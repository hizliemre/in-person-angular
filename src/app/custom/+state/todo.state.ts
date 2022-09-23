import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { merge, Observable, Subject } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

interface Action {
  type: string;
  payload?: any;
}

interface TodoState {
  items: TodoItem[];
}

const defaultState: TodoState = {
  items: [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }
  ],
};

@Injectable({ providedIn: 'root' })
export class TodoStore {

  constructor() {
    this.state$.subscribe();
  }

  /**
   * Actions
   */
  actions$: Subject<Action> = new Subject<Action>();

  /**
   * Dispatcher
   */
  dispatcher$: Observable<Action> =
    merge(this.actions$);

  /**
   * State Reducer
   */
  state$: Observable<TodoState> =
    this.dispatcher$.pipe(
      startWith(defaultState as any),
      shareReplay({ refCount: true, bufferSize: 1 })
    );

  /**
   * Selectors
   */
  items$: Observable<TodoItem[]> =
    this.state$.pipe(map((state) => state.items));

}
