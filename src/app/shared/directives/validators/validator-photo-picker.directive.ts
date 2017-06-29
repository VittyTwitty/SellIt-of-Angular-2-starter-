import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { forwardRef, Attribute } from '@angular/core';

export function validateFotoPicker(c: AbstractControl): ValidationErrors {
    const PHOTO_PICKER_RE = /([^\\s]+(\\.(?i)(jpg|png|gif|bmp))$)/;

    if (c.value && c.value !== '' && (c.value.length <= 1 || !PHOTO_PICKER_RE.test(c.value))) {
        return { 'price': true };
    }
    return null;
}

@Directive({
    selector: '[validatorPhotoPickerDirective]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatorPhotoPickerDirective), multi: true }
    ]
})

export class ValidatorPhotoPickerDirective implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
    }

    validate(c: AbstractControl): ValidationErrors {
        return validateFotoPicker(c);
    }



}