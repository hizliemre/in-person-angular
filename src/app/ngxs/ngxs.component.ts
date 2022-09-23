import { Component, HostBinding } from '@angular/core';
import { NgxsFacadeService } from './+state/facade';

@Component({
  selector: 'app-ngxs',
  templateUrl: './ngxs.component.html',
})
export class NgxsComponent {
  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  constructor(public readonly state: NgxsFacadeService) { }


}
