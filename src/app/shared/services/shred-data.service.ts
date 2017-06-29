import { Products } from '../footer/products';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
    products: Products[] = this.products;
    getProducts(): Products[] {
        return this.products;
    }
}