import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from "@angular/router";
import{HttpModule} from "@angular/http";
import {YoutubePlayerModule} from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import {HttpClient} from "./http/httpclient";
import {RequestOptionsBuilder} from "./http/RequestOptionBuilder";

const routes : Routes =[
   { path : ''  , loadChildren : './home/home.module#HomeModule'},
   {path : '' ,  loadChildren : './login/login.module#LoginModule'}]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    HttpModule,  
    RouterModule.forRoot(routes)
    ],
  exports:[],  
  providers: [HttpClient,RequestOptionsBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
