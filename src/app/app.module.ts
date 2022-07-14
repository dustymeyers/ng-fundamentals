import { EventListResolver } from './events/events-list-resolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventRouteActivator,
  EventService
} from './events/index'

import { appRoutes } from './routes';

import { ToastrService } from './common/toastr.service';

import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateEventComponent,
    Error404Component,
    EventsAppComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}
