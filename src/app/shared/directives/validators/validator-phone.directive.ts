import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { forwardRef, Attribute } from '@angular/core';

export function validatePhone(c: AbstractControl): ValidationErrors {
        const NAME_RE = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

        if (c.value && c.value !== '' && (c.value.length <= 10 || !NAME_RE.test(c.value))) {
            return { 'phone': true };
        }
        return null;

}

@Directive({
    selector: '[validatorPhone]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatorPhoneDirective), multi: true }
    ]
})

export class ValidatorPhoneDirective implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
    }

    validate(c: AbstractControl): ValidationErrors {
        return validatePhone(c);
    }



}