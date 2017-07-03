import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { User } from '../shared/models/user.model';

@Injectable()
export class Session {

    constructor(private cookieService: CookieService) {

    }

    public get sessionToken() {
        return this.cookieService.get('userToken');
    }

    public set sessionToken(token) {
        (token) ? this.cookieService.put('userToken', token) : this.cookieService.remove('userToken');

    }

    public get user() {
        let result = (this.sessionToken) ? new User(JSON.parse(localStorage.getItem('auth_token'))) : null;
        return result;
    }

    public set user(data) {
        localStorage.setItem('auth_token', JSON.stringify(data.getUser()));
    }
}
