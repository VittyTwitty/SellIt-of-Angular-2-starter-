import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserLoginService } from "../services/user-auth.service";
import { User } from "../models/user.model";
import { AuthService } from "../../core/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { CookieService } from "angular2-cookie/core";

@Component({
    selector: 'sellit-header',
    templateUrl: 'header.html',
    styleUrls: ['header.scss']
})

export class Header implements OnInit, OnDestroy {
    currentUser: User;
    sub: Subscription;
    public loggedInUser: boolean;

    constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {
        this.sub = this.authService.authListener()
            .subscribe(
            data => {
                this.loggedInUser = data;
            });

    }

    ngOnInit() {
        this.currentUser = this.authService.userTokenDate();
        if (this.currentUser) {
            this.loggedInUser = true;
        } else {
            this.loggedInUser = false;
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    logout() {
        this.authService.logout()
            .subscribe(
            data => {
                this.router.navigate(
                    ['/sellit-login-page',
                        {
                            outlets: { 'sellit-login-registr': ['sellit-sign-in'] }
                        }
                    ]
                )
                console.log(data);
            });
    }

    clickUser() {
        console.log(this.currentUser);
    }

}