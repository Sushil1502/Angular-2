import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventServices } from '../shared/event.services';

@Injectable({
    providedIn : 'root'
})
export class EventRouteActivatorService implements CanActivate {
    constructor(private event : EventServices, private router: Router){
        
    }
    canActivate(route:ActivatedRouteSnapshot)
    {
       const eventExists = !!this.event.getEvent(+route.params['id']);
       if(!eventExists)
       {
            this.router.navigate(['/404'])
       }
       return eventExists;
    }
} 