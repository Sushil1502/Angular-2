import {Component, OnInit} from '@angular/core'
import { EventServices } from './shared/event.services';
import {ActivatedRoute} from '@angular/router'
import { IEvent } from './shared/event.model';
@Component({
    selector: 'events-list',
    template:`<div>
    <h2> Upcoming Angular Event</h2>
    <hr/>
    <div class ="row">
    <div *ngFor="let event of events" class="col-md-5">
    <event-thumbnail  [event]="event"></event-thumbnail>
    </div>
    </div>  
</div>`
})
export class EventsListComponent implements OnInit{
    events : IEvent;
    constructor(private eve : EventServices, private route: ActivatedRoute){
        
        
    }
    ngOnInit(){
        // this.eve.getEvents().subscribe(
        // events=> {this.events= events}
        // );
       this.events=  this.route.snapshot.data['events']

    }
}
    
 
