
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthUserService} from './auth.User.service'
import {Router} from '@angular/router'

@Component({
  templateUrl:'./profile.component.html',
  styles: [`
  em {float:right; color#E05C65; padding-left :10px ;}
  .error input {background-color:#E3C3C5;}
  .error :: -webkit-input-placeholder {color:#999;}
  .error : -moz-placeholder {color:#999;}
  error: ms-input-placeholder {color:#999}
  `]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    constructor(private authUserService: AuthUserService, private route :Router){

    }
    ngOnInit(){
       let firstName = new FormControl(this.authUserService.currentUser.firstName, Validators.required)
       let lastName = new FormControl(this.authUserService.currentUser.lastName,Validators.required)
    this.profileForm = new FormGroup({
        firstName:firstName,
        lastName: lastName
    })
    }
    cancel(){
        this.route.navigate(['/events'])
    }
    saveProfile(fromvalues)
    {   if(this.profileForm.valid){
            this.authUserService.updateCurrentUser(fromvalues.firstName, fromvalues.lastName)
            this.route.navigate(['/events'])
        }
    }
  
    
       
}