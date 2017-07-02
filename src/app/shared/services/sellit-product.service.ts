import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Products } from '../footer/products';
import { ConfigService } from "./config.service";


@Injectable()
export class ProductService {
    private offset: number | string = 0;

    private id: string | number;
    
     private API_PATH: string;

    private limitOfQuery: number = 16;
    private offsetOfQuery: number | string = 0;
    private searchQuery: any = null;

    constructor(private http: Http, private configService: ConfigService) {
        this.API_PATH = this.configService.mainSrc;
    }

    public getParams() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('limit', `${this.limitOfQuery}`);
        params.set('offset', `${this.offsetOfQuery}`);
        params.set('search', `${this.searchQuery}`)
        return params;
    }

    public getUsersList(offsetOfQuery: number | string = 0, ...searchQuery): Observable<Products[]> {
        this.offsetOfQuery = offsetOfQuery;
        this.searchQuery = searchQuery;

        return this.http.get(this.API_PATH + 'poster', { search: this.getParams() })
            .map((response: Response) => {

                let data = response.json().results;
                let mainArr = [];
                data.forEach((index) => {
                    mainArr.push(new Products(index));
                });

                return mainArr;
            });

    }
    public getProductsListAll(): Observable<Products[]> {

        return this.http.get(this.API_PATH + 'poster')
            .map((response: Response) => {

                let data = response.json();
                let mainArr = [];
                data.forEach((index) => {
                    mainArr.push(new Products(index));
                });

                return mainArr;
            });

    }

    public getProduct(id: number) {
        this.id = id;

        return this.http.get(this.API_PATH + 'poster' + this.id).map((response: Response) => {
            let responseProduct = response.json();

            return new Products(responseProduct)

        });
    }

}
