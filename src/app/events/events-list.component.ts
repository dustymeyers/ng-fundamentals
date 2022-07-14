import { EventService } from './shared/event.service';
import { Component, OnInit } from "@angular/core";
import { ToastrService } from '../common/toastr.service';

// This is not testable, and bad practice here. We need to inject this as a service
// declare let toastr: { success: (arg0: any) => void; }

@Component({
    selector: 'events-list',
    template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    <div>
    `
})
export class EventsListComponent implements OnInit {

  public events: any[] = [];

  constructor(private eventService: EventService, private toastr: ToastrService) {
    // try to avoid initializing things inside of the constructor, instead use ngOnInit()
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
  }
}
