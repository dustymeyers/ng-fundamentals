import { EventService } from './../shared/event.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px }
  `]
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(private eventService: EventService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
}
