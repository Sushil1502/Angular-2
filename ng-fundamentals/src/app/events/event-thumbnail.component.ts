import {Input, Component, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';


@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [ngClass]="{green: event?.time=== '8:00 am',highlight: event?.time === '8:00 am'}"
         [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early)</span>
        <span *ngSwitchCase="'9:00 am'">(Normal)</span>
        <span *ngSwitchDefault>(Bit late)</span></div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            
            <span> {{event.location.city}}-{{event.location.country}}</span>
        </div>
       
    </div>`,
    styles: [`
            .highlight {font-weight:bold;}
            .green {background-color: #51a351;}
            .thumbnail {min-height:210px}
            .pad-left {margin-left: 10px}
            .well-div {color: red}
    `]
})
export class EventThumbnaillComponent{
    @Input() event:IEvent;
   // @Output() eventClick = new EventEmitter()
   
}