import { Directive, HostListener, OnInit, ElementRef } from '@angular/core';

import $ from 'jquery';

@Directive({
    selector: '[hideButton]'
})

export class HideButtonDirective{

   
    
    constructor(private elementRef: ElementRef) { }


  /* @HostListener('scroll', [])
    onScroll() {
       console.log('dfdf')
    } */
    

}