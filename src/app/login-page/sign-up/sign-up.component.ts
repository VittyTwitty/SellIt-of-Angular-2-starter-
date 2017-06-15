import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
    selector: 'sellit-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.scss']
})

export class SignUpComponent {


    public signUpForm: FormGroup = new FormGroup({

        email: new FormControl(''),
        name: new FormControl(''),
        password: new FormControl(''),
        passwordRepeat: new FormControl(''),
        phone: new FormControl(''),
        address: new FormGroup({
            country: new FormControl(''),
            city: new FormControl('')
        })

    })

    constructor() {

    }

    signUp($event) {
        $event.preventDefault();
        console.log(this.signUpForm.value)

    }

}