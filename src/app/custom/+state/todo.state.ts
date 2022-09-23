import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { merge, Observable, Subject } from 'rxjs';
import { map, scan, shareReplay, startWith } from 'rxjs/operators';
import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';

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
      scan((state: TodoState, action: Action): TodoState => {
        switch (action.type) {
          case 'add':
            {
              let newState = { ...state };
              newState = {
                ...newState,
                items: [...newState.items, action.payload]
              }
              return newState;
            }
          case 'update':
            {
              let newState = { ...state };
              let updatedItems = newState.items.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), {} as any);
              updatedItems = {
                ...updatedItems,
                [action.payload.id]: { ...updatedItems[action.payload.id], done: action.payload.done }
              };
              newState = {
                ...newState,
                items: Object.values(updatedItems)
              }
              return newState;
            }
          case 'remove': {
            const newStateItems = [...state.items];
            let index = state.items.findIndex((m) => m.id === action.payload);
            newStateItems.splice(index, 1);
            const newState = {
              ...state,
              items: newStateItems
            }
            return newState;
          }
          default:
            return state;
        }
      }, defaultState),
      shareReplay({ refCount: true, bufferSize: 1 })
    );

  /**
   * Selectors
   */
  items$: Observable<TodoItem[]> =
    this.state$.pipe(map((state) => state.items));

  /**
  * Actions
  */
  public add(item: TodoItem) { this.dispatch({ type: 'add', payload: item }); }
  public update($event: TodoItemEvent) { this.dispatch({ type: 'update', payload: $event }); }
  public remove(id: string) { this.dispatch({ type: 'remove', payload: id }); }

  private dispatch(action: Action): void {
    this.actions$.next(action);
  }

}
