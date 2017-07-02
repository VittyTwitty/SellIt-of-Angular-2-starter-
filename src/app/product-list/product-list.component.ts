import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { products } from '../shared/main.service';

import $ from 'jquery';


import { Products } from '../shared/footer/products';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/sellit-product.service';
import { RandomPhotoService } from '../shared/services/random-photo.service';
import { SearchService } from "../core/search.service";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";
import { SearchComponent } from "../shared/header/search/search.component";
import { TransferService } from "../core/transfer.service";

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.scss']

})

export class ProductListComponent implements OnInit {
    isEmpty: boolean = false;


    sub: Subscription;
    public photosRandom: any[];
    public offsetStep: number = 0;
    public respFlag: boolean = true;
    public searchQuery: any = null;
    private products: Products[];



    constructor(
        private productService: ProductService,
        private router: Router,
        private searchService: SearchService,
        private transferService: TransferService
    ) {
        this.sub = this.transferService.getResults().subscribe((res) => {
            //console.log("dsdsd " + res);
            this.products = [];
            if (res.length === 0) {
                this.pushDefault();
            } else {
                this.searchQuery = res;
                this.pushSearch(this.searchQuery);
            }
        })

    }

    public pushProducts() {
        if (this.respFlag) {
            console.log('Вернуться к пушу продуктов');
            let lengthItems: number = this.products.length;
            this.offsetStep += 16;

            this.productService.getUsersList(this.offsetStep).subscribe((res) => {
                res.forEach((prod) => {
                    this.products.push(prod);
                    if (this.products.length === lengthItems) {
                        this.respFlag = false;
                    }
                });
            });
        }
    }
    public pushDefault() {
        this.productService.getUsersList().subscribe((data) => {
            this.products = data;
            console.log(this.products);
        });
    }
    public pushSearch(searchQuery) {
        this.productService.getUsersList(0, this.searchQuery).subscribe((res) => {
            res.forEach((prod) => {
                this.products.push(prod);
            });           
        });
    }

    public handleSelect(event) {
        this.router.navigate(['/profile', event.name]);
    }

    public ngOnInit() {
        this.pushDefault()
    }
    public ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
