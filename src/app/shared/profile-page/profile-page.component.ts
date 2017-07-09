import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { UserChangeService } from '../../core/user-change.service';
import { Products } from '../footer/products';
import { User } from '../models/user.model';
import { DataSvgService } from '../services/data-svg.service';
import { ProductService } from '../services/sellit-product.service';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
    selector: 'sellit-profile',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss']
})

export class ProfileComponent implements OnInit {
    public id: any = 5;
    public postById: Products[];
    public settingsIcon: string;
    public currentUser: User;
    public fD: FormData;
    public profile_photo: any;
    public onlineUser: User;
    public sub: Subscription;
    public loggedInUser: boolean;

    public addAvatarForm: FormGroup = new FormGroup({
        profile_photo: new FormControl('')
    });

    public changePasswordForm: FormGroup = new FormGroup({
        newPassword1: new FormControl(''),
        newPassword2: new FormControl(''),
        oldPassword: new FormControl('')
    });

    public close = new EventEmitter();

    constructor(
        private productService: ProductService,
        private dataSvgService: DataSvgService,
        private userChangeService: UserChangeService,
        private authService: AuthService,
        private router: Router
    ) {

    }

    public ngOnInit() {
        this.onlineUser = this.authService.userTokenDate();
        (this.onlineUser) ? this.loggedInUser = true : this.loggedInUser = false;
        console.log(this.onlineUser);
        this.settingsIcon = this.dataSvgService.svgChooser('profileSettings');
        this.sub = this.authService.authListener()
            .subscribe(
            (data) => {
                this.loggedInUser = data;
            });

        this.lastPosts(this.id);

    }
    public onClickedExit() {
        let profile = document.getElementById('profile');
        // let overlay = document.getElementById('profile-overlay');

        profile.style.right = '-380px';
        setTimeout(() => this.close.emit('event'), 400);

        // overlay.style.display = 'none';
        // overlay.style.opacity = '0';
    }

    public changeListenerImg($event) {
        let inputValue = $event.target || $event.srcElement;
        this.profile_photo = inputValue.files;

        let bgImgAva = document.getElementById('change_avatar');

        let loadFile = (event) => {
            let reader = new FileReader();
            reader.onload = () => {
                let bgImgAva = document.getElementById('change_avatar-img');
                bgImgAva.setAttribute('src', reader.result);

            };
            reader.readAsDataURL(inputValue.files[0]);
        };

        loadFile($event);
        console.log(loadFile);

    }

    public addAvatar($event, form) {
        $event.preventDefault();

        if (this.profile_photo) {
            let files: FileList = this.profile_photo;
            this.fD = new FormData();
            for (let i = 0; i < files.length; i++) {
                this.fD.append('photo', files[i]);
            }
        }

        this.userChangeService.postPhoto(this.fD)
            .then((data) => {
                this.onlineUser = data;
            });

    }

    public lastPosts(id) {
        // this.productService.getProduct(id)
        //     .subscribe(
        //     (data) => {
        //         this.postById = data;
        //         console.log(this.postById);
        //     });
        this.productService.getProductByUserId()
            .then((data) => {
                this.postById = data;
                console.log(this.postById);
            });
    }

    public closePopup() {
        let closingElem = document.getElementById('profile_img-change--popup');

        closingElem.style.top = '-200px';
    }

    public openPopup() {
        let closingElem = document.getElementById('profile_img-change--popup');
        closingElem.style.top = '0';
    }

    public changePassword($event, val) {
        $event.preventDefault();
        console.log(val);
        this.userChangeService.changePassword(val)
            .then(
            (res) => {
                this.router.navigate(
                    ['/sellit-login-page',
                        {
                            outlets: { 'sellit-login-registr': ['sellit-sign-in'] }
                        }
                    ]
                );
                alert('Password changed. Relogin, please');
            },
            (error) => {
                alert(error);
            });
    }

}
