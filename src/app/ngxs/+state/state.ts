import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Guid } from 'guid-typescript';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { TodoListActions } from './actions';


export const featureKey = 'todoNgxsState';

export interface NgxsState {
  items: TodoItem[];
}

@State<NgxsState>({
  name: featureKey,
  defaults: {
    items: [
      { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
      { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
      { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
  }
})
@Injectable()
export class NgxsTodoListState {

  @Action(TodoListActions.Add)
  add(ctx: StateContext<NgxsState>, action: TodoListActions.Add): void {
    const state = ctx.getState();
    ctx.setState({ ...state, items: [...state.items, action.payload] })
  }

}
