import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class PostService {
    API_PATH: string;
    constructor(private http: Http) {
        this.API_PATH = 'http://fe-kurs.light-it.net:38000/api';
     }

    public deletePost(data) {
        return this.http.delete(`${this.API_PATH}/poster/${data}`)
            .map((res) => {
                return res.json();
            })
    }
    
    public deletePhoto(data) {
        return this.http.delete(`${this.API_PATH}/photo/${data}`)
            .map((res) => {
                return res.json();
            })
    }

    public putPost(data) {
        return this.http.put(`${this.API_PATH}/poster/`, data)
            .map((res) => {
                return res.json();
            })
    }
}