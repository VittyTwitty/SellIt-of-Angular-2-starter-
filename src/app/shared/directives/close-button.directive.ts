import { Directive, ElementRef } from '@angular/core';

import $ from 'jquery';

@Directive({
    selector: '[closeButton]',
    host: {
        '(click)': 'closeClick()'
    }
})

export class CloseButtonDirective {

    private closeClick() {
        let element = document.getElementById('profile');
        element.style.right = '-380px';
        // element.style.display = 'none';
        console.log(element.style.right);
    }
}
