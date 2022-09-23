import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/shared/todo-list/todo-item/todo-item.component';
import { featureKey } from './state';

@Injectable({
  providedIn: 'root'
})
export class NgxsFacadeService {

  @Select((state: any) => state[featureKey].items) items$!: Observable<TodoItem[]>;

}
