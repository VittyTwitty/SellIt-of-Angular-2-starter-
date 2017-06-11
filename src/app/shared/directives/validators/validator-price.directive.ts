import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { forwardRef, Attribute } from "@angular/core";

@Directive({
    selector: '[validatorPriceDirective]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatorPriceDirective), multi: true }
    ]
})

export class ValidatorPriceDirective implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
    }

    validate(c: AbstractControl): ValidationErrors {
        const PRICE_RE = /^[0-9]+?([.,][0-9]+)*$/;
   // /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
        if (c.value && c.value !== '' && (c.value.length <= 1 || !PRICE_RE.test(c.value))) {
            return { 'price': true };
        }
        return null;
    }



}