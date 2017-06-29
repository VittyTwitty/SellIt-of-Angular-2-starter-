import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/sellit-product.service';
import { Products } from '../../shared/footer/products';

export function sortNumbers(a, b) {
    return a - b;
}

@Component({
    selector: 'sellit-sort',
    templateUrl: 'sort.component.html',
    styleUrls: ['sort.component.scss']
})

export class SortComponent implements OnInit {
    public products: Products[];

    public productSort = [
        { name: 'По умолчанию' },
        { name: 'По цене' },
        { name: 'По имени' },
    ];
    public selectProductSort = this.productSort[0];


    constructor(private productService: ProductService) { }

    public ngOnInit() {
        this.productService.getProductsListAll().subscribe((data) => {
            this.products = data;
        });
    }

    public onChangeObj(newObj) {
        this.selectProductSort = newObj;
        let name = this.selectProductSort.name;

        let arraySortPrice = [];

        if (name === 'По умолчанию') {
            this.products.forEach((element) => {
                arraySortPrice.push(element.id);
            });
            arraySortPrice.sort(sortNumbers);
            console.log(arraySortPrice);

        }
        if (name === 'По цене') {
            this.products.forEach((element) => {
                arraySortPrice.push(element.price);
            });
            arraySortPrice.sort(sortNumbers);
            console.log(arraySortPrice);

        }
        if (name === 'По имени') {
            this.products.forEach((element) => {
                arraySortPrice.push(element.title);
            });
            arraySortPrice.sort();
            console.log(arraySortPrice);

        }

    }


}
