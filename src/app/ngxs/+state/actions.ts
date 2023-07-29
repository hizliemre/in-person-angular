import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';

export namespace TodoListActions {
  export class Add {
    static readonly type = '[TO DO] Add';
    constructor(public payload: TodoItem) { }
  }

  export class Remove {
    static readonly type = '[TO DO] Remove';
    constructor(public payload: string) { }
  }

  export class Update {
    static readonly type = '[TO DO] Update';
    constructor(public payload: TodoItemEvent) { }
  }
}
