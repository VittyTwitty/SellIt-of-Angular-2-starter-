import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { forwardRef, Attribute } from '@angular/core';

@Directive({
    selector: '[validatorEmail]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatorEmailDirective), multi: true }
    ]
})

export class ValidatorEmailDirective implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
    }

    validate(c: AbstractControl): ValidationErrors {
        const EMAIL_RE= /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (c.value && c.value !== '' && (c.value.length <= 5 || !EMAIL_RE.test(c.value))) {
            return { 'email': true };
        }
        return null;
    }



}