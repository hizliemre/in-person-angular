import { Component, HostBinding, OnInit } from '@angular/core';
import { NgxsEffects } from './+state/effects';
import { NgxsFacadeService } from './+state/facade';

@Component({
  selector: 'app-ngxs',
  templateUrl: './ngxs.component.html',
})
export class NgxsComponent implements OnInit {
  @HostBinding('class') classList = 'flex justify-center p-16 items-start w-full h-full'

  constructor(public readonly state: NgxsFacadeService, private readonly _effects: NgxsEffects) { }

  public ngOnInit(): void {
    this._effects.init();
  }

}
