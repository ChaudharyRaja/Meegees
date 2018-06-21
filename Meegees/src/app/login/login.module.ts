import {NgModule} from "@angular/core";
import{RouterModule,Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import{LoginComponent} from "./login.component"

const routes:Routes=[{
    path:"login",component:LoginComponent
}];

@NgModule({
    declarations :[
        LoginComponent,
    ],
imports:[RouterModule.forChild(routes),FormsModule],
exports:[RouterModule]
})

export class LoginModule{}