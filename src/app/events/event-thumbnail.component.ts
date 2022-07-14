import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <!-- <div class="well" [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time"> -->
      <!-- <div [style.color]="event?.time === '8:00 am'  ? '#003300' : '#bbb'" [ngSwitch]="event?.time"> -->
      <!-- <div [ngStyle]="{'color': event?.time === '8:00 am'  ? '#003300' : '#bbb', 'font-weight': event?.time === '8:00 am'  ? 'bold' : 'normal'}" [ngSwitch]="event?.time"> -->
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
      Time:
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
    `,
    styles: [`
      /* .green { color: #003300 !important;}
      .bold { font-weight: bold; } */
      .thumbnail { min-height: 210px; }
      .pad-left { margin-left: 10px; }
      .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;

    public getStartTimeClass() {
      const isEarlyStart = this.event && this.event.time === '8:00 am';
      return {green: isEarlyStart, bold: isEarlyStart}

    //   /**Is the same as below */
    //
    //   if (this.event && this.event.time === '8:00am') {
    //     return 'green bold';
    //   }
    //   return '';
    //   if (this.event && this.event.time === '8:00am') {
    //     return ['green', 'bold'];
    //   }
    //   return [];
    }

    public getStartTimeStyle(): any {
      if (this.event && this.event.time === '8:00 am'){
        return {'color': '#003300', 'font-weight': 'bold'}
      }
      return {}
    }
}
