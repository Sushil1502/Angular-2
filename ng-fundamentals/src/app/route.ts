import {Routes} from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list-resolver.service';
// import {UserModule} from './user/user.module'
//import {CreateEventComponent} from './src/app/route.ts'

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent,canDeactivate:['canDeactivateCreateEvent'] },
    {path: 'events', component: EventsListComponent,resolve:{events:EventListResolverService} },
    {path: 'events/:id', component: EventDetailsComponent,canActivate:[EventRouteActivatorService]},
    {path: '404',component: Error404Component},
    
   
    {path: 'user',loadChildren:'./user/user.module#UserModule'},
    {path: '**', redirectTo:'events',pathMatch:'full'},
    {path: '', redirectTo:'/events',pathMatch:'full'},]