import { Injectable } from '@angular/core';
import { Iuser } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthUserService{
    currentUser :Iuser
     loginUser(userName :string , password: string){
        this.currentUser={
            id : 1,
           firstName : 'sushil',
            lastName : 'Bhutta',
           userName : userName
        }
           
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName: string, lastName:string)
    {
            this.currentUser.firstName = firstName,
            this.currentUser,lastName = lastName
    }
}