import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Angular apps grooped into modules.
// they are always bootstrapped with our App Component
// This file is loaded via bootstrap by the angular.json file
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
