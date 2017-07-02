import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'angular2-cookie/core';
import { Session } from './session';
import { ConfigService } from "../shared/services/config.service";

@Injectable()
export class AuthService {

    public subject = new BehaviorSubject(this.loggedIn());
    public API_PATH = '';
    public redirectUrl: string;

    constructor(private http: Http, private session: Session, private configService: ConfigService) {
        this.API_PATH = this.configService.mainSrc;
        // this.loggedIn = !!localStorage.getItem('auth_token');
    }

    public login(data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.API_PATH}login/`, JSON.stringify(data), { headers })
            .map((response: Response) => {
                let userPerson = response.json();
                let token = userPerson.token;
                if (userPerson && token) {
                    let currentUser = new User(userPerson);
                    this.session.sessionToken = token;
                    localStorage.setItem('auth_token', JSON.stringify(currentUser.getUser()));
                    this.signInListener();
                    return currentUser;
                }

            });
    }

    public photos(data) {
        return this.http.post(`${this.API_PATH}photo/`, data)
            .map((response: Response) => {
                let photo = response.json();
                let arrPhotos = [];
                for (let i = 0; i < photo.length; i++) {
                    arrPhotos.push(photo[i].id);
                }
                return arrPhotos;
            });
    }

    public profilePhoto(data) {
        return this.http.post(`${this.API_PATH}profile_photo/`, data)
            .map((response: Response) => {
                let profilePhoto = response.json();
                console.log(profilePhoto);
                return profilePhoto;
            });
    }

    public addPost(data) {
        return this.http.post(`${this.API_PATH}poster/`, data)
            .map((response: Response) => {
                return response.json();
            });
    }

    public logout() {
        return this.http.post(`${this.API_PATH}logout/`, '')
            .map((response: Response) => {
                // this.cookieService.remove('userId');
                // this.cookieService.remove('userToken');
                this.session.sessionToken = null;
                localStorage.removeItem('auth_token');
                // console.log(response.json());
                return response.json();
            });
    }

    public signup(data) {
        return this.http.post(`${this.API_PATH}signup/`, data)
            .map((response: Response) => {
                // console.log(response.json());
                return response.json();
            });
    }

    public loggedIn() {
        // if (this.session.sessionToken) {
        //     return true;
        // } else {
        //     return false;
        // }
        return !!this.session.sessionToken;
    }

    public authListener(): Observable<any> {
        let subAsObservable = this.subject.asObservable();
        return subAsObservable;
    }

    public signInListener() {
        if (this.session.sessionToken) {
            return this.subject.next(true);
        } else {
            localStorage.removeItem('auth_token');
            return this.subject.next(false);
        }
    }

    public userTokenDate() {
        return (this.session.sessionToken) ? new User(JSON.parse(localStorage.getItem('auth_token'))) : null;
    }

}
