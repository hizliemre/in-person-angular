import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';

interface NgServiceState {
  items: TodoItem[];
}

const initialValue: NgServiceState = {
  items: []
}

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {

  private readonly _store$ = new BehaviorSubject<NgServiceState>(initialValue);

}
