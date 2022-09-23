import { createReducer, on } from '@ngrx/store';
import { Guid } from 'guid-typescript';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { todoListActions } from './actions';

interface NgrxState {
  items: TodoItem[];
}

const initialValue: NgrxState = {
  items: [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
}


export const reducer = createReducer(
  initialValue,
  on(todoListActions.add, (state, action) => {
    const newState = { ...state };
    newState.items.push(action.item);
    return newState;
  }),
  on(todoListActions.update, (state, action) => {
    const newState = { ...state };
    let updated = newState.items.find((m) => m.id === action.event.id);
    if (!updated) return state;
    updated.done = action.event.done;
    return newState;
  }),
  on(todoListActions.remove, (state, action) => {
    const newState = { ...state };
    let index = newState.items.findIndex((m) => m.id === action.id);
    newState.items.splice(index, 1);
    return state;
  }),
)
