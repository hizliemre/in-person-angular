import { QueryEntity } from '@datorama/akita';
import { TodosState, TodosStore } from './todo.store';

export class TodosQuery extends QueryEntity<TodosState> {
  constructor(protected override store: TodosStore) {
    super(store);
  }
}
