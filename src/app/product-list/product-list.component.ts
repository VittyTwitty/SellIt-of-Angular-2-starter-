import { Component, HostListener, OnInit } from "@angular/core";

import { products } from "../shared/main.service";

import $ from 'jquery';

import { ProductService } from "../shared/footer/user.service";
import { Products } from "../shared/footer/products";

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

    constructor(private productService: ProductService) { }

    public ngOnInit() {
        this.productService.getUsersList().subscribe((data) => {
            this.productsIn = data;
            this.products = this.productsIn.slice(0, 13);
            console.log(this.productsIn)
        });
    }

    public pushProducts() {
        this.arrFrom = this.arrTo;
        this.arrTo = this.arrTo + 16;

        for (var i = 0; i < 16; i++) {

            if (this.products.length < this.productsIn.length) {
                this.products.push(this.productsIn.slice(this.arrFrom, this.arrTo)[i]);
            } else {
                return this.products;
            }

        }
        return this.products;
    }

    @HostListener('scroll', ['$event'])
    onScroll(event) {
        let x: any = $('.s-content__inner');
        let y: any = $('product-list');

        if (y.height() + y.scrollTop() >= x.height()) {
            this.pushProducts();
            console.log('ffffffffff');
        }
    }
}

  /* 
   private arrFrom: number = 0;
    private arrTo: number = 16;
   private prd: any[] = products;

   

    public prd2: any[] = this.prd.slice(this.arrFrom, this.arrTo);

    public pushProducts() {
        this.arrFrom = this.arrTo;
        this.arrTo = this.arrTo + 16;    
        
        for (var i = 0; i < 16; i++) {

           this.prd2.push(this.prd.slice(this.arrFrom, this.arrTo)[i]);
                      
        }
        
        return this.prd2;
    }
*/




