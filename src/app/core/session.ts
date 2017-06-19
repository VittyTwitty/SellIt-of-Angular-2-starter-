import { Injectable } from "@angular/core";
import { CookieService } from "angular2-cookie/core";

@Injectable()
export class Session {

    constructor(private cookieService: CookieService) {

    }

   
    public get sessionToken() {        
        return this.cookieService.get('userToken');
    }

    public set sessionToken(token: string) {
        this.cookieService.put('userToken', token);
    }


}
