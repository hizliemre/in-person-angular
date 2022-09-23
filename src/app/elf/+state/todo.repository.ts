import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { addEntities, deleteEntities, selectAllEntities, updateEntities, withEntities } from '@ngneat/elf-entities';
import { Guid } from 'guid-typescript';
import { TodoItem, TodoItemEvent } from 'src/app/shared/todo-list/todo-item/todo-item.component';

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
  public items$ = store.pipe(selectAllEntities());

  public add(item: TodoItem) {
    store.update(addEntities(item));
  }

  public update($event: TodoItemEvent) {
    store.update(
      updateEntities($event.id, (entity) => ({
        ...entity,
        done: $event.done
      }))
    );
  }

  public remove(id: string) {
    store.update(deleteEntities(id));
  }
}
