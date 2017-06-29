import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserLoginService } from "../services/user-auth.service";
import { User } from "../models/user.model";
import { AuthService } from '../../core/auth.service';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { UserChangeService } from "../../core/user-change.service";
import { DataSvgService } from "../services/data-svg.service";


@Component({
    selector: 'sellit-header',
    templateUrl: 'header.html',
    styleUrls: ['header.scss'],
})

export class Header implements OnInit, OnDestroy {
    public mainLogo: string;

    public currentUser: User;
    public avatar: string;
    public userPortfolio: any[] = [];
    public profileUser: Subscription;
    public user: void;
    public currentOnline: User;
    public sub: Subscription;
    public loggedInUser: boolean;

    constructor(private dataSvgService: DataSvgService, private userChangeService: UserChangeService, private authService: AuthService, private router: Router) {


    }

    public ngOnInit() {

        (this.currentOnline) ? this.loggedInUser = true : this.loggedInUser = false;

        this.mainLogo = this.dataSvgService.svgChooser('mainLogo');

        this.userChangeService.getProfile()
            .then((data) => {
                this.currentOnline = data;
            })

        this.sub = this.authService.authListener()
            .subscribe(
            (data) => {
                this.loggedInUser = data;

            });

    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public logout() {
        this.authService.logout()
            .subscribe(
            (data) => {
                this.router.navigate(
                    ['/sellit-login-page',
                        {
                            outlets: { 'sellit-login-registr': ['sellit-sign-in'] }
                        }
                    ]
                );
            });
    }

}
