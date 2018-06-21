import {NgModule} from "@angular/core";
import{RouterModule,Routes} from "@angular/router";
import{HomeComponent} from "./home.component";
import{DesktopComponent} from "../desktop/desktop.component";
import{SidemenuComponent} from "./../sidemenu/sidemenu.component";
import{FooterComponent} from "./../footer/footer.component";
import{HeaderComponent} from "./../header/header.component";

const routes:Routes=[{
    path:"home",component:HomeComponent,children:[{
        path:"desktop", loadChildren : './../desktop/desktop.module#DesktopModule'}
    ]
}];

@NgModule({
imports:[RouterModule.forChild(routes)],
declarations : [
    HomeComponent,   
    SidemenuComponent,
    FooterComponent,
    HeaderComponent
],
exports:[RouterModule]
})

export class HomeModule{

}