import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';

import { CreateEventComponent } from './events/create-event.component';
import { EventsAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateEventComponent,
    EventsAppComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
