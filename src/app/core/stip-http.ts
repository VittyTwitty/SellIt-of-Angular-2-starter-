import { Http, Request, RequestOptionsArgs, Response, RequestOptions,  XHRBackend } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { Session } from "./session";

@Injectable()
export class StipHttp extends Http {

  constructor(_backend: XHRBackend, _defaultOptions: RequestOptions, private session : Session) {
    super(_backend, _defaultOptions);
  }

  public request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
   if(this.session.sessionToken){
     if (options) {
          options.headers.set('Authorization', `Token ${this.session.sessionToken}`);
        } else {
        
        (<Request> url).headers.set('Authorization', `Token ${this.session.sessionToken}`);
        }
        

   }
        return super.request(url, options);
   
  }
}