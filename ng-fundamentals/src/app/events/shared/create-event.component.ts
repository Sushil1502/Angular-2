import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
 template:`
    <h2> New Event</h2>
    <hr>
    <div>
    <h3>Create event will be here</h3>
    <br/><br/>
    <button type="submit" class= "btn btn-primary">Save</button>
    <button (click)= "Cancelled()" type="button" class = "btn btn-default">Cancel</button>
    </div>
 `
}   
)
export class CreateEventComponent{
    isDirty:boolean = true;
    constructor(private route : Router)
    {
        route.navigate(['/events'])
    }
    Cancelled(){

    }
}