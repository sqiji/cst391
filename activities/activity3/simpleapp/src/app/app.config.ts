import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';

imports: [

  BrowserModule,
  ReactiveFormsModule,
  AppRoutingModule
  
  ]


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
