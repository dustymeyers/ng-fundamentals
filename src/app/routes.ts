import { Routes } from '@angular/router';

import { EventRouteActivator } from './events/event-details/event-route-activator.service';

import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent},
  { path: 'events', component: EventsListComponent },
  // /events/1 ... /events/foo
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full'}

]
