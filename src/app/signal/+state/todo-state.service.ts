import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

interface NgSignalService {
  items: TodoItem[];
}

const initialValue: NgSignalService = {
  items: [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
}

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {


}
