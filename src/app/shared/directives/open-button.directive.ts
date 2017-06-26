import { Directive } from '@angular/core';


//import $ from 'jquery';

@Directive({
    selector: '[openButton]',
    host: {
        '(click)': 'closeClick()'
    }
})

export class OpenButtonDirective {

    constructor() {
        
    }
    closeClick() {
        //let closeElement = $('.profile');

        //closeElement.css('z-index', '50');   

        //closeElement.css('right', '0');
        let element = document.getElementById('profile');
        element.style.right = '0';
        //element.style.display = 'block';
        

        console.log('qwqw')


    }
}