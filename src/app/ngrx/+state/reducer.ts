import { createReducer, on } from '@ngrx/store';
import { Guid } from 'guid-typescript';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { todoListActions } from './actions';

export const featureKey = 'todoState';

export interface NgrxState {
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
    let newState = { ...state };
    newState = {
      ...newState,
      items: [...newState.items, action.item]
    }
    return newState;
  }),
  on(todoListActions.update, (state, action) => {
    let newState = { ...state };
    let updatedItems = newState.items.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), {} as any);
    updatedItems = {
      ...updatedItems,
    };
    newState = {
      ...newState,
      items: Object.values(updatedItems)
    }
    return newState;
  }),
  on(todoListActions.remove, (state, action) => {
    const newStateItems = [...state.items];
    let index = state.items.findIndex((m) => m.id === action.id);
    newStateItems.splice(index, 1);
    const newState = {
      ...state,
      items: newStateItems
    }
    return newState;
  }),
)
