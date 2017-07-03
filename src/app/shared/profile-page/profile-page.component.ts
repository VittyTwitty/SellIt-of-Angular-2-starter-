import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserChangeService } from '../../core/user-change.service';
import { DataSvgService } from '../services/data-svg.service';

@Component({
    selector: 'sellit-profile',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss']
})

export class ProfileComponent implements OnInit {
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

    constructor(private dataSvgService: DataSvgService, private userChangeService: UserChangeService, private authService: AuthService) {

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
    }

    public changeListenerImg($event) {
        let inputValue = $event.target || $event.srcElement;
        this.profile_photo = inputValue.files;

        let bgImgAva = document.getElementById('change_avatar');

        let loadFile = function(event) {
            let reader = new FileReader();
            reader.onload = function() {
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

    public closePopup() {
        let closingElem = document.getElementById('profile_img-change--popup');

        closingElem.style.top = '-200px';
    }

    public openPopup() {
        let closingElem = document.getElementById('profile_img-change--popup');
        closingElem.style.top = '0';
    }

}
