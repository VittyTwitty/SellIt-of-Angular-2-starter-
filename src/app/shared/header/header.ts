import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserLoginService } from '../services/user-auth.service';
import { User } from '../models/user.model';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserChangeService } from '../../core/user-change.service';
import { DataSvgService } from '../services/data-svg.service';
import { ProfileAnchorDirective } from '../directives/validators/profile-anchor.directive';
import { ProfileComponent } from '../profile-page/profile-page.component';

@Component({
    selector: 'sellit-header',
    templateUrl: 'header.html',
    styleUrls: ['header.scss'],
    entryComponents: [ProfileComponent]
})

export class Header implements OnInit, OnDestroy {
    @ViewChild(ProfileAnchorDirective) public profileAnchor: ProfileAnchorDirective;

    public mainLogo: string;

    public currentUser: User;
    public avatar: string;
    public userPortfolio: any[] = [];
    public profileUser: Subscription;
    public user: void;
    public currentOnline: User;
    public sub: Subscription;
    public loggedInUser: boolean = false;

    constructor(private dataSvgService: DataSvgService, private userChangeService: UserChangeService, private authService: AuthService, private router: Router) {

    }

    public ngOnInit() {

        (this.currentOnline) ? this.loggedInUser = true : this.loggedInUser = false;

        this.mainLogo = this.dataSvgService.svgChooser('mainLogo');

        this.userChangeService.getProfile()
            .then((data) => {
                this.currentOnline = data;
            });

        this.sub = this.authService.authListener()
            .subscribe(
            (data) => {
                this.loggedInUser = data;

            });

    }

    public openDialogBox() {
        this.profileAnchor.createProfile(ProfileComponent);

        let element = document.getElementById('profile');
        // let overlay = document.getElementById('profile-overlay');

        setTimeout(() => element.style.right = '0', 0);
        // overlay.style.opacity = '.95';
        // overlay.style.display = 'block';
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
