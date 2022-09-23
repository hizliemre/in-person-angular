import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

interface Action {
  type: string;
  payload?: any;
}

interface TodoState {
  items: TodoItem[];
}

const defaultState: TodoState = {
  items: [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }
  ],
};

@Injectable({ providedIn: 'root' })
export class TodoStore {

  /**
   * Actions
   */
  actions$: Subject<Action> = new Subject<Action>();

}
