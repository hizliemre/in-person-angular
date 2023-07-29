// import { enableProdMode, importProvidersFrom } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { ElfComponent } from './app/elf/elf.component';
// import { NgServiceComponent } from './app/ng-service/ng-service.component';
// import { NgrxComponent } from './app/ngrx/ngrx.component';
// import { NgxsComponent } from './app/ngxs/ngxs.component';
// import { WelcomeComponent } from './app/welcome/welcome.component';

// import { provideState, provideStore } from '@ngrx/store';
// import { provideStoreDevtools } from '@ngrx/store-devtools';
// // import * as fromReducer from './app/ngrx/+state/reducer';
// import { provideEffects } from '@ngrx/effects';
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { NgxsModule } from '@ngxs/store';
// import { NgrxEffects } from './app/ngrx/+state/effects';
// import * as fromReducer from './app/ngrx/+state/entity-reducer';
// import { NgxsTodoListState } from './app/ngxs/+state/state';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// const routes: Routes = [
//   {
//     path: '',
//     component: WelcomeComponent
//   },
//   {
//     path: 'ng-service',
//     component: NgServiceComponent
//   },
//   {
//     path: 'ngrx',
//     component: NgrxComponent,
//     providers: [
//       // provideState(fromReducer.featureKey, fromReducer.reducer),
//       provideState(fromReducer.feature),
//       provideEffects([NgrxEffects])
//     ]
//   },
//   {
//     path: 'ngxs',
//     component: NgxsComponent,
//   },
//   {
//     path: 'elf',
//     component: ElfComponent
//   }
// ];

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(RouterModule.forRoot(routes)),
//     provideStore(),
//     provideEffects([]),
//     provideStoreDevtools()
//   ],
// })


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
