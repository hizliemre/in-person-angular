import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { TodoListActions } from './actions';
import { featureKey } from './state';

@Injectable({
  providedIn: 'root'
})
export class NgxsFacadeService {

  @Select((state: any) => state[featureKey].items) items$!: Observable<TodoItem[]>;

  constructor(private readonly _store: Store) { }

  public add(item: TodoItem): void {
    this._store.dispatch(new TodoListActions.Add(item))
  }

}
