import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[bold]'
})

export class BoldDirective {

    constructor(private element: ElementRef) {
        this.element.nativeElement.style = 'font-weight: 200';
    }
}