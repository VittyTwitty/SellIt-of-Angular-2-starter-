import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AuthService } from "./auth.service";

import 'rxjs/add/operator/toPromise';
import { User } from "../shared/models/user.model";
import { Session } from "./session";

@Injectable()

export class UserChangeService {
    photoId: any;
    currentUser: User;
    API_PATH: string;

    constructor(private http: Http, private authService: AuthService, private session: Session) {
        this.API_PATH = 'http://fe-kurs.light-it.loc:38000/api';
        this.currentUser = this.authService.userTokenDate();
    }


    public getProfile() {
        return this.http.get(`${this.API_PATH}/profile/me`)
            .map(res => {
                let profile = new User(res.json());
                this.session.user = profile;
                this.authService.signInListener();
                return profile;
            }).toPromise();
    }


    // .map((response: Response) => {
    //     let photo = response.json();
    //     let arrPhotos = [];
    //     for (let i = 0; i < photo.length; i++) {
    //         arrPhotos.push(photo[i].id);
    //     };
    //     return arrPhotos;
    // })
    public postPhoto(data) {
        return this.http.post(`${this.API_PATH}/photo/`, data)
            .map((res) => {
                let photo = res.json();
                let photoId = photo[0].id;
                return photoId;
            }).toPromise()
            .then(res => {
                return this.http.post(`${this.API_PATH}/profile_photo/`, {
                    user: this.session.user.id,
                    photo: res
                })
                    .map(res => {
                        console.log(res.json())
                        return res.json();
                    }).toPromise()
                    .then(res => {
                        return this.http.get(`${this.API_PATH}/profile/me`)
                            .map(res => {
                                let profile = new User(res.json());
                                this.session.user = profile;
                                this.authService.signInListener();
                                return profile;
                            }).toPromise()
                    })
            })
    }


}
