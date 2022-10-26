import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

export interface TodosState extends EntityState<TodoItem, string> { }

@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super();
  }
}
