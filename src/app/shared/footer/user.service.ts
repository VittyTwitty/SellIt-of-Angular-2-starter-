import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Products } from "./products";

@Injectable()
export class ProductService {

    private productsURL = 'http://fe-kurs.light-it.net:38000/api/poster/';
    private results: Products[] = [];

    private results2: Products[] = [];

    constructor(private http: Http) { }

    public getUsersList(): Observable<Products[]> {
        return this.http.get(this.productsURL).map((response) => {

            let data = response.json();
            data.forEach((index) => {
                this.results.push(new Products(index));
            });
            
            return this.results;
        });
        
    }

 getAll() {
    return Observable.of(this.results);
  }

  getOne(index) {
    // if(this.articles.length >= index+1) return Observable.
      return this.http.get(this.productsURL);
  }

}
