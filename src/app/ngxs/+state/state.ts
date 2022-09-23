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

  @Action(TodoListActions.Remove)
  remove(ctx: StateContext<NgxsState>, action: TodoListActions.Remove): void {
    const state = ctx.getState();
    const index = state.items.findIndex((m) => m.id === action.payload);
    const list = [...state.items];
    list.splice(index, 1);
    ctx.setState({ ...state, items: list })
  }

  @Action(TodoListActions.Update)
  update(ctx: StateContext<NgxsState>, action: TodoListActions.Update): void {
    const state = ctx.getState();
    let newState = { ...state };
    let updatedItems = newState.items.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), {} as any);
    updatedItems = {
      ...updatedItems,
      [action.payload.id]: { ...updatedItems[action.payload.id], done: action.payload.done }
    };
    newState = {
      ...newState,
      items: Object.values(updatedItems)
    }
    ctx.setState(newState)
  }

}
