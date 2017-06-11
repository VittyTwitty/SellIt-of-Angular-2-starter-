import { Directive } from '@angular/core';

@Directive({
    selector: 'changeAvatar',
    host: {
        '(click)': 'changeAvatarClick()'
    }
    
}) 

export class ChangeAvatarDirective {

    constructor() {}

    
}