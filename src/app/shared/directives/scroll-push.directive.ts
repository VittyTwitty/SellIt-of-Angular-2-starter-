import { Directive, HostListener, EventEmitter, Output } from '@angular/core';


import $ from 'jquery';

@Directive({
    selector: '[scrollPushItems]'
})

export class ScrollPushItemsDirective {

    @Output() public nextPage: EventEmitter<any> = new EventEmitter<any>();

    @HostListener ('window:scroll', ['$event'])
    onScroll(event) {
        let x: any = $('.s-content__inner');
        let y: any = $(window);

        if (y.height() + y.scrollTop() >= x.height()) {
            this.nextPage.emit();

        }
    }
}
