import { Component } from '@angular/core';
import { RandomPhotoService } from "../services/random-photo.service";
import { AuthService } from "../../core/auth.service";
import { User } from "../models/user.model";
import { Subscription } from "rxjs/Subscription";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'sellit-profile',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss']
})

export class ProfileComponent {
    fD: FormData;
    profile_photo: any;
    currentUser: User;
    sub: Subscription;
    public loggedInUser: boolean;

    photoRandom: any[];
    constructor(private randomPhotoService: RandomPhotoService, private authService: AuthService) {
        this.randomPhotoService.getPhotosRandom().subscribe(data => {
            this.photoRandom = data;
            // console.log(this.photoRandom);
        })
    }

    ngOnInit() {
        this.currentUser = this.authService.userTokenDate();
        // console.log(this.currentUser);        
        this.sub = this.authService.authListener()
            .subscribe(
            data => {
                this.loggedInUser = data;
                // console.log('this.loggedInUser  ' + this.loggedInUser);
            });
        //console.log(this.sub);
        (this.currentUser) ? this.loggedInUser = true : this.loggedInUser = false;
    }

    public addAvatarForm: FormGroup = new FormGroup({
        profile_photo: new FormControl('')
    })

    changeListenerImg($event) {
        let inputValue = $event.target || $event.srcElement;
        this.profile_photo = inputValue.files;
        console.log(this.profile_photo[0])
        console.log(this.currentUser.id)
    }

    addAvatar($event, form) {
        $event.preventDefault();

        if (this.profile_photo) {
            let files: FileList = this.profile_photo;
            this.fD = new FormData();
            for (let i = 0; i < files.length; i++) {
                this.fD.append('photo', files[i]);
            }
        }

        let profile_photoFinaly = {
            user: this.currentUser.id,
            photo: []
        }


        this.authService.photos(this.fD)
            .subscribe(
            data => {
                profile_photoFinaly.photo = data;
                console.log(profile_photoFinaly.photo)
                this.authService.addPost(profile_photoFinaly)
                    .subscribe(
                    data => {
                        alert('good');

                    },
                    error => {
                        alert('bad');
                    })


            },
            error => {
                console.error(error);
            })

        // this.authService.profilePhoto(profile_photoFinaly)
        //     .subscribe(
        //     data => {

        //     })

    }



}