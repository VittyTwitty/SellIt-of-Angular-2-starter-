import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserLoginService } from "../services/user-auth.service";
import { User } from "../models/user.model";
import { AuthService } from "../../core/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'sellit-header',
    templateUrl: 'header.html',
    styleUrls: ['header.scss'],
})

export class Header implements OnInit, OnDestroy {
    currentUser: User;
    sub: Subscription;
    public loggedInUser: boolean;

    constructor(private authService: AuthService, private router: Router) {


        //this.clickUser();
        //this.currentUser = this.authService.userTokenDate();
        //console.log('this.currentUser  ' + this.currentUser);

    }

    ngOnInit() {
        this.currentUser = this.authService.userTokenDate();
        // console.log('this.currentUser');
        //  console.log(this.currentUser);
        // console.log('this.currentUser');
        this.sub = this.authService.authListener()
            .subscribe(
            data => {
                this.loggedInUser = data;
                //  console.log('this.loggedInUser  ' + this.loggedInUser);
            });
        // console.log(this.sub);
        (this.currentUser) ? this.loggedInUser = true : this.loggedInUser = false;
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
                // console.log(data);
            });
    }

    // clickUser() {
    //     //console.log(this.currentUser);
    //     if (this.loggedInUser) {
    //         //  console.log('Vitalik, gotovo')
    //         new User(JSON.parse(localStorage.getItem('auth_token')));
    //     } else {
    //         //  console.log('Vitalik dumai');
    //     }
    // }

}