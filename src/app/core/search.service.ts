import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { ConfigService } from '../shared/services/config.service';

@Injectable()
export class SearchService {
    private API_PATH: string;
    constructor(private http: Http, private configService: ConfigService) {
        this.API_PATH = this.configService.mainSrc;
    }

    public search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap((term) => this.searchEntries(term));
    }

    public searchEntries(term) {
        return this.http
            .get(`${this.API_PATH}poster/?search=` + term)
            .map((res) => {
                let prodSearch = res.json();
                // console.log(term);
                // let a;
                // for (let property in prodSearch) {
                //     a = prodSearch[property].title;
                //     console.log(a)
                // }
                return res.json();
            });
    }

}
