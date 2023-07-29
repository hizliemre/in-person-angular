import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodosState, TodosStore } from './todo.store';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {
  constructor(protected override store: TodosStore) {
    super(store);
  }

  selectAll$ = this.selectAll();
}
