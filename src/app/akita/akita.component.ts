import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';
import { TodosQuery } from './+state/todo.query';
import { TodosService } from './+state/todo.service';

@Component({
  selector: 'app-akita',
  templateUrl: './akita.component.html',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
})
export class AkitaComponent {

  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  constructor(public readonly query: TodosQuery, public readonly service: TodosService) { }

}
