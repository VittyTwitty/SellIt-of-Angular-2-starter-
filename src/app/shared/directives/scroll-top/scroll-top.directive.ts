import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

import $ from 'jquery';
@Directive({
    selector: '[scrollTop]',
    host: {
        '(click)': 'onClick()',
        '(window:scroll)': 'onScrollHide()'
    }
})

export class ScrollTopDirective {


    constructor(private element: ElementRef) {
        this.element.nativeElement.style = 'opacity: 1';
    }

    public x: any = $('product-list');
    onClick() {
        console.log('Vitalik click')
        this.x.animate({
            scrollTop: 0
        }, 200);
    }

    onScrollHide() {
        console.log('onScrollHide')
    }
}