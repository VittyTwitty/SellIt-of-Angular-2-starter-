import { Products } from '../footer/products';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
    public products: Products[] = this.products;
    public getProducts(): Products[] {
        return this.products;
    }
}