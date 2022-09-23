import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent2 } from './app.component';
import { ElfComponent } from './elf/elf.component';
import { NgServiceComponent } from './ng-service/ng-service.component';
import { NgxsComponent } from './ngxs/ngxs.component';
import { NgxsSampleModule } from './ngxs/ngxs.module';
import { WelcomeComponent } from './welcome/welcome.component';

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
    path: 'ngxs',
    component: NgxsComponent,
  },
  {
    path: 'elf',
    component: ElfComponent
  }
];


@NgModule({
  declarations: [
    AppComponent2
  ],
  imports: [
    BrowserModule,
    NgxsSampleModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent2]
})
export class AppModule { }
