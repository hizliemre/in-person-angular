import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { Guid } from 'guid-typescript';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { todoListActions } from './actions';

export const featureKey = 'todoState';

export interface NgrxState extends EntityState<TodoItem> { }

export const entityAdapter = createEntityAdapter();

const defaultItems = [
  { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
  { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
  { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }
];

const initialValue = entityAdapter.getInitialState({
  entities: defaultItems,
  ids: defaultItems.map((m) => m.id)
});


const reducer = createReducer(
  initialValue,
  on(todoListActions.add, (state, action) => {
    return entityAdapter.addOne(action.item, state);
  }),
  on(todoListActions.update, (state, action) => {
    const updated = {
      id: action.event.id,
      changes: { done: action.event.done }
    } as Update<TodoItem>;

    return entityAdapter.updateOne(updated, state);
  }),
  on(todoListActions.remove, (state, action) => {
    return entityAdapter.removeOne(action.id, state);
  }),
)

export const feature = createFeature({
  name: featureKey,
  reducer
})
