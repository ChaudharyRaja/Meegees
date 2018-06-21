import { Injectable } from "@angular/core";
import { Http, ResponseOptions, RequestOptions, Response, RequestMethod } from "@angular/http";
import { Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpClient{

  private _http: Http;
  private _requestOptions: RequestOptions;

  constructor(http: Http) {
    this._http = http;
  }

  invoke(requestOptions: RequestOptions): Observable<Response> {

   this._requestOptions = requestOptions;
    switch (this.requestMethod(requestOptions)) {
      case "get":
        return this.get();
      case "post":
        return this.post();
      case "put":
        return this.put();
      case "delete":
        return this.delete();

    }
  }

  get(): Observable<Response> {
debugger;
    return this._http
    .get(this._requestOptions.url, this._requestOptions);
   // .pipe(map(res=>res.json() as RESPONSE));
  }

  post(): Observable<Response> {
    return this._http.post(this._requestOptions.url, this._requestOptions.body, this._requestOptions);
  }

  put(): Observable<Response> {
    return null;
  }

  delete(): Observable<Response> {
    return null;
  }

  requestMethod(option: RequestOptions): string {

    let method = option.method.toString().toLowerCase();
    switch (method) {
      case "0":
      case "get":
        method = "get";
        break;

      case "1":
      case "post":
        method = "post";

        break;

      case "2":
      case "put":
        method = "put";
        break;

      case "3":
      case "delete":
        break;
    }
    return method;
  }
}

