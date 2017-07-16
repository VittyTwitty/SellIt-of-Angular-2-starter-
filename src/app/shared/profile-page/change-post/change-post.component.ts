import { Component, OnInit, Input } from '@angular/core';
import { Products } from "../../footer/products";

@Component({
    selector: 'sellit-change-post',
    templateUrl: 'change-post.component.html',
    styleUrls: ['change-post.component.scss']
})

export class ChangePostComponent implements OnInit {
    @Input() post: Products[];
    @Input() id;
    constructor() {
    }

    ngOnInit() {
        setTimeout(function() {
            console.log(this.post)
        }, 2000);
    }
}