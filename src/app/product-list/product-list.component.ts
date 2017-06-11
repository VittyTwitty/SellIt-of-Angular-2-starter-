import { Component, HostListener, OnInit } from "@angular/core";

import { products } from "../shared/main.service";

import $ from 'jquery';


import { Products } from "../shared/footer/products";
import { Router } from "@angular/router";
import { ProductService } from "../shared/services/sellit-product.service";
import { RandomPhotoService } from "../shared/services/random-photo.service";

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.scss']

})

export class ProductListComponent implements OnInit {
    photosRandom: any[];

    offsetStep: number = 0;
    respFlag: boolean = true;

    // private productsIn: Products[];
    private products: Products[];

   

    constructor(private productService: ProductService, private router: Router) { }

    public ngOnInit() {
        this.productService.getUsersList().subscribe((data) => {
            this.products = data;
           
            // this.products = this.productsIn.slice(this.arrFrom, this.arrTo);

        });

        
    }



    public pushProducts() {
        if (this.respFlag) {
            let lengthItems: number = this.products.length;
            this.offsetStep += 16;
            
            this.productService.getUsersList(this.offsetStep).subscribe(res => {
                res.forEach(prod => {
                    this.products.push(prod);
                    if (this.products.length === lengthItems) {
                        this.respFlag = false;
                    };
                })
            })
        }

    }

    /*  public pushProducts() {
          this.arrFrom = this.arrTo;
          this.arrTo = this.arrTo + 16;
  
          for (var i = 0; i < 16; i++) {
  
              if (this.products.length < this.productsIn.length) {
                  this.products.push(this.productsIn.slice(this.arrFrom, this.arrTo)[i]);
              }
  
          }
         
          return this.products;
      }
      */

    handleSelect(event) {
        this.router.navigate(['/profile', event.name]);
    }


}

