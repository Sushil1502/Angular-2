import { Component } from '@angular/core';
import { AuthUserService } from '../user/auth.User.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[` .nav.navbar-nav {font-size: 15px;}
               #searchForm {margin-right:10px;}
               @media(max-width: 1200px){#searchForm {display: none}}
               li>a.active {color: #f97924}
    `]
})
export class NavbarComponent{
    constructor(private auth : AuthUserService)
    {
        
    }

}