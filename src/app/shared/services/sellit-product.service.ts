import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Products } from "../footer/products";


@Injectable()
export class ProductService {
    private offset: number | string = 0;

    private id: string | number;
    private productsHomeURL = 'http://fe-kurs.light-it.net:38000/api/poster/';
    private productsLabsURL = 'http://fe-kurs.light-it.loc:38000/api/poster/';

    private limitOfQuery: number = 16;
    private offsetOfQuery: number | string = 0;

    // private results: Products[] = [];

    //  private results2: Products[] = [];

    constructor(private http: Http) { }

    public getParams() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('limit', `${this.limitOfQuery}`);
        params.set('offset', `${this.offsetOfQuery}`);
        return params;
    }

    public getUsersList(offsetOfQuery: number | string = 0): Observable<Products[]> {
        this.offsetOfQuery = offsetOfQuery;

        return this.http.get(this.productsHomeURL, { search: this.getParams() })
            .map((response: Response) => {

                let data = response.json().results;
                let mainArr = [];
                data.forEach((index) => {
                    mainArr.push(new Products(index));
                });

                return mainArr;
            });

    }

    getProduct(id: number) {
        this.id = id;

        return this.http.get(this.productsHomeURL + this.id).map((response: Response) => {
            let responseProduct = response.json();
          
            return new Products(responseProduct)
            
        })
    }

}
