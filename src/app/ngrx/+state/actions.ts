import { createAction, createActionGroup, props } from '@ngrx/store';
import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';

// released v13.2.0
export const todoListActions = createActionGroup({
  source: '[TO DO LIST]',
  events: {
    add: props<{ item: TodoItem }>(),
    update: props<{ event: TodoItemEvent }>(),
    remove: props<{ id: string }>()
  }
});

// old fashion way
const add = createAction('[TO DO List] Add', props<{ item: TodoItem }>())
const update = createAction('[TO DO List] Update', props<{ event: TodoItemEvent }>())
const remove = createAction('[TO DO List] Remove', props<{ id: string }>())

export const todoListActions2 = {
  add,
  update,
  remove
}
