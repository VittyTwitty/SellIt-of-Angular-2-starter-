import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Observable } from 'rxjs/Observable';
import { Auth } from '../../shared/models/auth.model';

@Component({
    selector: 'sellit-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.scss']
})

export class SignInComponent implements OnInit {

    public signInForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')

    });

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.authService.logout();
    }

    public loginUser($event, form) {
        $event.preventDefault();
        this.authService.login(new Auth(form.value))
            .subscribe(
            (data) => {
                this.router.navigate(['/']);
               // console.log(data);
            },
            (error) => {
                alert(`Don't enter, because ${error}`);
            });
    }

}
