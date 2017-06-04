import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from "@angular/router";
import { Products } from "../shared/footer/products";
import { ProductService } from "../shared/footer/user.service";

import { Observable, Subscription } from "rxjs/";

@Component({
    selector: 'single-page',
    templateUrl: 'single-page.component.html',
    styleUrls: ['single-page.component.scss']
})

export class SinglePageComponent implements OnInit {
    isProd: any;
    sub3: any[];
    sub2: Subscription;
    public sub: Subscription;



    public id: number;
    public title: string;
    public price: number;
    public photo: any;

    constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        })

        this.sub2 = this.route.queryParams.subscribe(info => {
            this.title = info['title'];
            this.price = info['price'];
            this.photo = info['photo'];         
        

        })
        console.log(this.sub2);

        this.sub3 = this.route.snapshot.data[0]; 
        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}