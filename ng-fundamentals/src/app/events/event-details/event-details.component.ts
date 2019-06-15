import { Component } from '@angular/core';
import { EventServices } from '../shared/event.services';
import {ActivatedRoute} from '@angular/router'
import { IEvent } from '../shared/event.model';

@Component(
    {
        templateUrl : './event-details.component.html',
        styles: [`.container {padding-left:20px; padding-right:20 px;}
                   .event-image {height: 50px;}`]
    }
)
export class EventDetailsComponent{
    event : IEvent;
    id : number;
    constructor(private eventService : EventServices, private route: ActivatedRoute)
    {

    }
    ngOnInit()
    {
        
        // this.id = +this.route.snapshot.paramMap.get('id');
        // this.event = this.eventService.getEvent(this.id);
        this.event = this.eventService.getEvent(+this.route.snapshot.paramMap.get('id'));
        console.log('event is ::',this.event);

        
    }

}