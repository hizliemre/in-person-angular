import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { TodoListComponent } from '../shared/todo-list/todo-list.component';
import { TodoStateService } from './+state/todo-state.service';

@Component({
  selector: 'app-ng-service',
  templateUrl: './ng-service.component.html',
  standalone: true,
  imports: [CommonModule, TodoListComponent]
})
export class NgServiceComponent {

  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  public readonly state = inject(TodoStateService);

}
