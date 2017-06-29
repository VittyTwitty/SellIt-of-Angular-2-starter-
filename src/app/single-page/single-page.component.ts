import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';


import { Observable, Subscription } from 'rxjs/';
import { Products } from '../shared/footer/products';
import { products } from '../shared/main.service';
import { SharedDataService } from '../shared/services/shred-data.service';
import { ProductService } from '../shared/services/sellit-product.service';

@Component({
    selector: 'single-page',
    templateUrl: 'single-page.component.html',
    styleUrls: ['single-page.component.scss'],
    providers: [ProductService]
})

export class SinglePageComponent implements OnInit {


    public sub: Subscription;
    public products: any = {};
    public id: number;

    constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {

    }
    public ngOnInit() {

        this.sub = this.route.params.subscribe((params) => {
            this.id = +params['id'];
        });

        this.productService.getProduct(this.id).subscribe((items) => {
            this.products = items;
            console.log(this.products);

        });

    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }


}
