import { Component, Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {map} from 'rxjs/operators';
import {EventServices} from './shared/event.services'

@Injectable({
    providedIn: 'root'
})

export class EventListResolverService implements Resolve<any>{
    constructor(private eventService : EventServices){

    }
    resolve(){
        return this.eventService.getEvents().pipe(map(events=>events))
    }
}