import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  selectAllEntities, withEntities
} from '@ngneat/elf-entities';
import { Guid } from 'guid-typescript';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

const store = createStore(
  { name: 'todos' },
  withEntities<TodoItem>({
    initialValue: [
      { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
      { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
      { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
  })
);

@Injectable({ providedIn: 'root' })
export class TodosRepository {
  items$ = store.pipe(selectAllEntities());
}
