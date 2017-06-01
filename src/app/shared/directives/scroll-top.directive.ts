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


    constructor(private el: ElementRef) {
        this.el.nativeElement.style.display = 'none';
    }

    public html: any = $('body');
    onClick() {
        console.log(this.html);      
        this.html.animate({
            scrollTop: 0
        }, 300);
    }

    onScrollHide() {
        console.log(this.html.scrollTop()); 
        if (this.html.scrollTop() > 115 && this.html.scrollTop() < 149) {

            this.el.nativeElement.style.display = 'flex';
            this.el.nativeElement.style.opacity = 0.3;

        } else if (this.html.scrollTop() > 150 && this.html.scrollTop() < 169) {

            this.el.nativeElement.style.display = 'flex';
            this.el.nativeElement.style.opacity = 0.6;

        } else if (this.html.scrollTop() > 170) {

            this.el.nativeElement.style.display = 'flex';
            this.el.nativeElement.style.opacity = 1;

        } else {

            this.el.nativeElement.style.display = 'none';
            this.el.nativeElement.style.opacity = 0;
            
        }
      
    }
}