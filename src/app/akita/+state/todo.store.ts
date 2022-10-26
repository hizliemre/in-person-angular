import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Guid } from 'guid-typescript';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

export interface TodosState extends EntityState<TodoItem, string> { }

const initialEntities: TodoItem[] = [
  { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
  { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
  { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]

const initialState: TodosState = {
  entities: initialEntities.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
  ids: initialEntities.map(item => item.id)
}
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState);
  }
}
