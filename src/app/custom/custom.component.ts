import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { Guid } from 'guid-typescript';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  standalone: true,
  imports: [CommonModule, TodoListComponent]
})
export class CustomComponent {

  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full';

  public items = [
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' },
    { id: Guid.create().toString(), done: true, title: 'Lorem ipsum dolor sit amet' }
  ];

}
