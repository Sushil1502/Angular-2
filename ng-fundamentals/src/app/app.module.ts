import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventAppComponent } from './events.app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnaillComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventServices } from './events/shared/event.services';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import {CreateEventComponent} from './events/shared/create-event.component'
import {Error404Component} from './errors/404.component'
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import {EventListResolverService} from './events/events-list-resolver.service';
import {AuthUserService} from './user/auth.User.service'
import {IEvent} from './events/shared/event.model'




@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnaillComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[EventServices,
    EventRouteActivatorService,
    {provide:'canDeactivateCreateEvent',useValue:checkDirtyState},EventListResolverService,
    AuthUserService],

    
  bootstrap: [EventAppComponent],
  
})
export class AppModule { 
  
}
export function checkDirtyState(createEventCOmponent: CreateEventComponent){
  if(createEventCOmponent.isDirty)
    return window.confirm('you havent save, Are you sure want to move from this page')
  return true;
}
