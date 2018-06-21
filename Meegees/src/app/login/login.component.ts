import{Component,OnInit} from "@angular/core";
import{User} from "../models/user";
declare var $:any;

@Component({
selector:"login-app",
styleUrls:[],
templateUrl:"login.html",
providers:[User]
})

export class LoginComponent implements OnInit
{
    userObject:User
    constructor(user:User)
    {
        this.userObject=user;
    }   

    ngOnInit(){
     
    }
}