import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class RandomPhotoService {

    private limitOfQuery: number = 3;
    private photosRandomUrl = 'https://randomuser.me/api/?results=';

    constructor(private http: Http) {

    }


    public getPhotosRandom() {
        return this.http.get(this.photosRandomUrl + this.limitOfQuery)
            .map((response: Response) => {
                  let data = response.json().results;
                  let randomArr = [];
                  data.forEach( (photos) => {
                      randomArr.push(photos);
                  });
                  return randomArr;
            });
    }

}