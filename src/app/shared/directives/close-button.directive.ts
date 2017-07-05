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
        let profile = document.getElementById('profile');
        let overlay = document.getElementById('profile-overlay');

        profile.style.right = '-380px';

        overlay.style.display = 'none';
        overlay.style.opacity = '0';
        // element.style.display = 'none';
        console.log(profile.style.right);
    }
}
