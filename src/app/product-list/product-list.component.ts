import { Component, HostListener, OnInit } from "@angular/core";

import { products } from "../shared/main.service";

import $ from 'jquery';

import { ProductService } from "../shared/footer/user.service";
import { Products } from "../shared/footer/products";
import { Router } from "@angular/router";

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.scss']

})

export class ProductListComponent implements OnInit {

    private productsIn: Products[];
    private products: Products[];

    private arrFrom: number = 0;
    private arrTo: number = 16;
    id: number;

    constructor(private productService: ProductService, private router: Router) { }

    public ngOnInit() {
        this.productService.getUsersList().subscribe((data) => {
            this.productsIn = data;
            this.products = this.productsIn.slice(this.arrFrom, this.arrTo);
            console.log(this.products)
        });
    }

    public pushProducts() {
        this.arrFrom = this.arrTo;
        this.arrTo = this.arrTo + 16;

        for (var i = 0; i < 16; i++) {

            if (this.products.length < this.productsIn.length) {
                this.products.push(this.productsIn.slice(this.arrFrom, this.arrTo)[i]);
            }

        }

        return this.products;
    }

    handleSelect(event) {
        this.router.navigate(['/profile', event.name]);
    }


}

