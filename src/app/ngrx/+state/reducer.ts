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
  on(todoListActions.add, (state) => { return state; }),
  on(todoListActions.add, (state) => { return state; }),
  on(todoListActions.add, (state) => { return state; }),
)
