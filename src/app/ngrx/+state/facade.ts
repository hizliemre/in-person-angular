import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { todoListActions } from './actions';
// import * as fromReducer from './reducer';
import * as fromReducer from './entity-reducer';

@Injectable({
  providedIn: 'root'
})
export class TodoStateFacade {

  // items$ = this._store.select(selectItems);
  items$ = this._store.select(fromReducer.feature.selectEntities);

  constructor(private readonly _store: Store) { }

  public update($event: TodoItemEvent): void {
    this._store.dispatch(todoListActions.update({ event: $event }));
  }

  public remove(id: string): void {
    this._store.dispatch(todoListActions.remove({ id }));
  }

  public add(item: TodoItem): void {
    this._store.dispatch(todoListActions.add({ item }));
  }

}
