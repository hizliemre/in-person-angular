import { Guid } from 'guid-typescript';
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
