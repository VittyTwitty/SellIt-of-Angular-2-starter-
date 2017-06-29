import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sellit-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.scss']
})

export class SignUpComponent {

    public signup: Response;

    public signUpForm: FormGroup = new FormGroup({

        email: new FormControl(''),
        username: new FormControl(''),
        password: new FormControl(''),
        password_confirm: new FormControl(''),
        phone: new FormControl(''),
        address: new FormGroup({
            country: new FormControl(''),
            city: new FormControl('')
        })

    });

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    public signUp($event, form) {
        $event.preventDefault();
        this.authService.signup(form.value)
            .subscribe(
            (data) => {
                this.router.navigate(
                    ['/sellit-login-page',
                        {
                            outlets: { 'sellit-login-registr': ['sellit-sign-in'] }
                        }
                    ]
                );
                console.log(data);

            },
            (err) => {
                console.error(err);
            });
    }

}
