import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
    selector: 'sellit-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.scss']
})

export class SignInComponent {


    signInForm: FormGroup = this.formBuilder.group({
        email: new FormControl(''),
        password: new FormControl('')

    });

    constructor(private formBuilder: FormBuilder) {}
    signIn($event){
        $event.preventDefault();
        console.log(this.signInForm.value)
    }

}