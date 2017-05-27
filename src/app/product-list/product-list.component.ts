import { Component, HostListener } from "@angular/core";

import { products } from "../shared/main.service";

import $ from 'jquery';

@Component ({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.scss']

})

export class ProductListComponent {
    
    
    private prd: any[] = products;

    private arrFrom: number = 0;
    private arrTo: number = 16;

    public prd2: any[] = this.prd.slice(this.arrFrom, this.arrTo);

    public pushProducts() {
        this.arrFrom = this.arrTo;
        this.arrTo = this.arrTo + 16;    
        
        for (var i = 0; i < 16; i++) {

           this.prd2.push(this.prd.slice(this.arrFrom, this.arrTo)[i]);
                      
        }
        
        return this.prd2;
    }

  
@HostListener('scroll', ['$event'])
    onScroll(event) {
        let x: any = $('.s-content__inner');
        let y: any = $('product-list');

        if(y.height() + y.scrollTop() >= x.height()){
            this.pushProducts();
        }
    }

}

/*  concatOfProducts(arrFrom, arrTo) {
        
        arrFrom = arrFrom + 14;
        arrTo = arrTo + 14;
        this.prd2 = this.prd.slice(this.arrFrom, this.arrTo);        
        
        return this.prd2;

    } */

  /* countProducts(prd){   
        
        let result:any[] = [];    
        for(let i: number = 0; i<prd.length; i++){
             
            if(i < 12) {
                result.push(prd[i]);                
            }
        }
        return result;
    }  */


    
    
    

    //public products: any[] = this.countProducts(this.prd);