import { Directive, ElementRef } from '@angular/core';

import $ from 'jquery';

@Directive({
    selector: '[closeButton]',
    host: {
        '(click)': 'closeClick()'
    }
})

export class CloseButtonDirective {

    constructor() {}

    closeClick() {
        let closeElement = $('.profile');
        closeElement.css('right', '-380px');
    }
}