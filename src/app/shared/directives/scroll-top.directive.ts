import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[scrollTop]',
    host: {
        '(click)': 'onClick()',
        '(window:scroll)': 'onScroll()'
    }
})

export class ScrollTopDirective {

    constructor(private element: ElementRef) {
        this.element.nativeElement.style = 'opacity: 0';
    }

    onClick() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; //for Firefox
    }

    onScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (scrollTop + document.body.clientHeight >= document.body.offsetHeight + 200) {
            this.element.nativeElement.style = 'opacity: 1';
        }
        else
            this.element.nativeElement.style = 'opacity: 0';
    }
}