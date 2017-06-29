import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserLoginService {
    public user: User[];
    constructor(private http: Http) {
    }

    public getUser(): User[] {
        return this.user;
    }
    public getLoginUser() {
        let currentUser: any;
        return currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

}
