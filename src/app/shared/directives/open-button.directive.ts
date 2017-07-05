import { Directive } from '@angular/core';

@Directive({
    selector: '[openButton]',
    host: {
        '(click)': 'closeClick()'
    }
})

export class OpenButtonDirective {

    public closeClick() {
        let element = document.getElementById('profile');
        let overlay = document.getElementById('profile-overlay');

        element.style.right = '0';
        overlay.style.opacity = '.95';
        overlay.style.display = 'block';
        console.log('qwqw');
    }
}
