import { Directive, ElementRef } from '@angular/core';

import $ from 'jquery';

@Directive({
    selector: '[openButton]',
    host: {
        '(click)': 'closeClick()'
    }
})

export class OpenButtonDirective {

    constructor() { }

    closeClick() {
        let closeElement = $('.profile');

        closeElement.css('z-index', '50');   
             
        closeElement.css('right', '0');


    }
}