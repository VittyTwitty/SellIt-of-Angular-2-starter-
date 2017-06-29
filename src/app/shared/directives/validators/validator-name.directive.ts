import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { forwardRef, Attribute } from '@angular/core';

export function validateName(c: AbstractControl): ValidationErrors {
        const NAME_RE = /^([a-zа-яё]+|\d+)/i;
        if (c.value && c.value !== '' && (c.value.length <= 1 || !NAME_RE.test(c.value))) {
            return { 'name': true };
        }
        return null;

}

@Directive({
    selector: '[validatorNameDirective]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatorNameDirective), multi: true }
    ]
})

export class ValidatorNameDirective implements Validator {
    constructor() {
    }

    validate(c: AbstractControl): ValidationErrors {

        return validateName(c);
    }



}