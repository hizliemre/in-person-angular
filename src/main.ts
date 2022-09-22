import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ElfComponent } from './app/elf/elf.component';
import { NgServiceComponent } from './app/ng-service/ng-service.component';
import { NgrxComponent } from './app/ngrx/ngrx.component';
import { NgxsComponent } from './app/ngxs/ngxs.component';
import { WelcomeComponent } from './app/welcome/welcome.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'ng-service',
    component: NgServiceComponent
  },
  {
    path: 'ngrx',
    component: NgrxComponent
  },
  {
    path: 'ngxs',
    component: NgxsComponent
  },
  {
    path: 'elf',
    component: ElfComponent
  }
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
})
