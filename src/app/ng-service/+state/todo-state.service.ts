import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BehaviorSubject, map } from 'rxjs';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

interface NgServiceState {
  items: TodoItem[];
}

const initialValue: NgServiceState = {
  items: [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
}

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {

  private readonly _store$ = new BehaviorSubject<NgServiceState>(initialValue);

  public items$ = this._store$.pipe(map((state) => state.items));
}
