import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
    private API_PATH: string;
    constructor(private http: Http) {
        this.API_PATH = 'http://fe-kurs.light-it.net:38000/api';
    }



    search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
    }

    searchEntries(term) {
        return this.http
            .get(`${this.API_PATH}/poster/?search=` + term)
            .map(res => {
                let prodSearch = res.json();
                // let a;
                // for (let property in prodSearch) {
                //     a = prodSearch[property].title;
                //     console.log(a)
                // }
                return res.json();
            });
    }




}