import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: '<img class="h-[500px] rounded-lg border border-white" src="/assets/welcome.webp" >',
  standalone: true,
})
export class WelcomeComponent implements OnInit {

  @HostBinding('class') classList = "flex w-full h-full justify-center items-center"

  constructor() { }

  ngOnInit(): void { }
}
