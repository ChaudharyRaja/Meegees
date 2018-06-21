import {NgModule} from "@angular/core";
import{RouterModule,Routes} from "@angular/router";
import{DesktopComponent} from "./desktop.component";
import {DesktopSideComponent} from './sidemenu.component'

const routes:Routes=[{
    path:'',component:DesktopComponent , outlet : "home"
}];

@NgModule({
    declarations : [
        DesktopSideComponent,
        DesktopComponent
    ],
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})

export class DesktopModule{

}