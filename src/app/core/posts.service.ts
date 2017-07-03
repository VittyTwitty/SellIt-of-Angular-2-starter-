import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../shared/services/config.service';

@Injectable()
export class PostService {
    private API_PATH: string;
    constructor(private http: Http, private configService: ConfigService) {
        this.API_PATH = this.configService.mainSrc;
    }

    public deletePost(data) {
        return this.http.delete(`${this.API_PATH}poster/${data}`)
            .map((res) => {
                return res.json();
            });
    }

    public deletePhoto(data) {
        return this.http.delete(`${this.API_PATH}photo/${data}`)
            .map((res) => {
                return res.json();
            });
    }

    public putPost(data) {
        return this.http.put(`${this.API_PATH}poster/`, data)
            .map((res) => {
                return res.json();
            });
    }
}
