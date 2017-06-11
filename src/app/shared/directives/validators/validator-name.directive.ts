import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { forwardRef, Attribute } from "@angular/core";

@Directive({
    selector: '[validatorNameDirective]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatorNameDirective), multi: true }
    ]
})

export class ValidatorNameDirective implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
    }

    validate(c: AbstractControl): ValidationErrors {
        const NAME_RE = /^([a-zа-яё]+|\d+)$/i;
   // /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
        if (c.value && c.value !== '' && (c.value.length <= 1 || !NAME_RE.test(c.value))) {
            return { 'name': true };
        }
        return null;
    }



}