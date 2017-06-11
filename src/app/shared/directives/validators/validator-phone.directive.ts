import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { forwardRef, Attribute } from "@angular/core";

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
        const PHONE_RE = /[0-9]/;

        if (c.value && c.value !== '' && (c.value.length <= 5 || !PHONE_RE.test(c.value))) {
            return { 'phone': true };
        }
        return null;
    }



}