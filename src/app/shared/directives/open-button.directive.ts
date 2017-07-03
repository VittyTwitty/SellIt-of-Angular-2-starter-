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
        element.style.right = '0';
        console.log('qwqw');
    }
}
