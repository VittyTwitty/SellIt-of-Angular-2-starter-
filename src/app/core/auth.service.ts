import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { CookieService } from "angular2-cookie/core";
import { Observable } from "rxjs/Observable";
import { User } from "../shared/models/user.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {

    private subject = new BehaviorSubject(this.loggedIn());
    private API_PATH = '';

    constructor(private http: Http, private cookieService: CookieService) {
        this.API_PATH = 'http://fe-kurs.light-it.net:38000/api';
        // this.loggedIn = !!localStorage.getItem('auth_token');
    }

    public login(data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.API_PATH}/login/`, JSON.stringify(data), { headers })
            .map((response: Response) => {
                let userPerson = response.json();
                let token = userPerson.token;
                if (userPerson && token) {
                    let currentUser = new User(userPerson);
                    this.cookieService.put('userId', (currentUser.id).toString());
                    this.cookieService.put('userToken', token);
                    localStorage.setItem('auth_token', JSON.stringify(currentUser.getUser()));
                    this.signInListener()
                    // console.log(userPerson);
                    // console.log(token);
                    // console.log(currentUser);
                    return currentUser;
                }

            })
    }

    public logout() {
        return this.http.post(`${this.API_PATH}/logout/`, '')
            .map((response: Response) => {
                this.cookieService.remove('userId');
                this.cookieService.remove('userToken');
                localStorage.removeItem('auth_token');
                // console.log(response.json());
                return response.json();
            })
    }

    public signup(data) {
        return this.http.post(`${this.API_PATH}/signup/`, data)
            .map((response: Response) => {
                // console.log(response.json());
                return response.json();
            });
    }

    public loggedIn() {
        if (this.cookieService.get('userToken')) {
            return true;
        } else {
            return false;
        }
    }

    public authListener(): Observable<any> {
        let subAsObservable = this.subject.asObservable();
        return subAsObservable;
    }

    public signInListener() {
        let subNext = this.subject;
        if (this.cookieService.get('userToken')) {
            return subNext.next(true);
        }
        else {
            localStorage.removeItem('auth_token');
            return subNext.next(false);
        }
    }

    public userTokenDate() {
        if (this.cookieService.get('userToken')) {
            return new User(JSON.parse(localStorage.getItem('auth_token')));
        } else {
            return null;
            // return false;
        }
    }

}