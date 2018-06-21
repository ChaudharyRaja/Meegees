import { Injectable } from "@angular/core";
import { HttpClient } from "../http/httpclient";
import {Router} from "@angular/router";
import { RequestOptionsBuilder } from "../http/RequestOptionBuilder";
import { Configuration } from "../configuation";
@Injectable()
export class User {
    private _httpClient: HttpClient;
    private _requestOption: RequestOptionsBuilder;

    private _name: string;
    private _password: string;
 private _route:Router;
    constructor(httpClient: HttpClient, requestOption: RequestOptionsBuilder,route:Router) {
        this._httpClient = httpClient;
        this._requestOption = requestOption;
        this._route=route;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }


    get password() {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    login() {
       
        var _body = "username=" + this._name + "&password=" + this._password + "&grant_type=password";
        
        var requestOption = this._requestOption.withUrl(Configuration.BASEURI + "/token")
            .withMethod("Post").withHeader("Content-Type","application/x-www-form-urlencoded")
            .withBody(_body)
            .build();
    
        this._httpClient.invoke(requestOption).subscribe(res => {
           this._route.navigate(['home']);
        });
    }
}
