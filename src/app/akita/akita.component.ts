import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TodoItem } from '../shared/todo-list/todo-item/todo-item.component';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';

@Component({
  selector: 'app-akita',
  templateUrl: './akita.component.html',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
})
export class AkitaComponent {


  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  items: TodoItem[] = [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }]
}
