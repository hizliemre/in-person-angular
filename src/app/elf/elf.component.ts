import { Component, HostBinding } from '@angular/core';
import { TodoItem } from '../shared/todo-list/todo-item/todo-item.component';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';

@Component({
  selector: 'app-elf',
  templateUrl: './elf.component.html',
  standalone: true,
  imports: [TodoListComponent]
})
export class ElfComponent {

  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  items: TodoItem[] = [
    { id: 1, done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: 2, done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: 3, done: true, title: 'Lorem ipsum dolor sit amet' }]
}
