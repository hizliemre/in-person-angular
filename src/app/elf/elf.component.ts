import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';
import { TodosRepository } from './+state/todo.repository';

@Component({
  selector: 'app-elf',
  templateUrl: './elf.component.html',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
})
export class ElfComponent {

  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  constructor(public readonly state: TodosRepository) { }

}
