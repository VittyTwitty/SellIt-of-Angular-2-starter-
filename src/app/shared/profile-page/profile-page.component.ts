import { Component } from '@angular/core';
import { AuthService } from "../../core/auth.service";
import { User } from "../models/user.model";
import { Subscription } from "rxjs/Subscription";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { UserChangeService } from "../../core/user-change.service";
import { DataSvgService } from "../services/data-svg.service";

@Component({
    selector: 'sellit-profile',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss']
})

export class ProfileComponent {
    settingsIcon: string;

    currentUser: User;
    fD: FormData;
    profile_photo: any;
    onlineUser: User;
    sub: Subscription;
    public loggedInUser: boolean;


    constructor(private dataSvgService: DataSvgService, private userChangeService: UserChangeService, private authService: AuthService) {

    }

    ngOnInit() {
        this.onlineUser = this.authService.userTokenDate();
        (this.onlineUser) ? this.loggedInUser = true : this.loggedInUser = false;    
        console.log(this.onlineUser)  

        this.settingsIcon = this.dataSvgService.svgChooser('profileSettings');

        this.sub = this.authService.authListener()
            .subscribe(
            data => {
                this.loggedInUser = data;
            });
    }

    public addAvatarForm: FormGroup = new FormGroup({
        profile_photo: new FormControl('')
    })

    changeListenerImg($event) {
        let inputValue = $event.target || $event.srcElement;
        this.profile_photo = inputValue.files;

        let bgImgAva = document.getElementById('change_avatar');
        //bgImgAva.innerHTML = this.profile_photo[0].name;
        //bgImgAva.setAttribute('src', $event.target);
        //console.log(this.profile_photo[0]);

        let loadFile = function (event) {
            let reader = new FileReader();
            reader.onload = function () {
                let bgImgAva = document.getElementById('change_avatar-img');
                bgImgAva.setAttribute('src', reader.result);
         
               
            };
            reader.readAsDataURL(inputValue.files[0]);
        };

        loadFile($event)
        console.log(loadFile)

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


        this.userChangeService.postPhoto(this.fD)
            .then(data => {
                this.onlineUser = data;
            })


    }

    closePopup() {
        let closingElem = document.getElementById('profile_img-change--popup');

        closingElem.style.display = "none";
    }

    openPopup() {
        let closingElem = document.getElementById('profile_img-change--popup');
        closingElem.style.display = "block";
    }



}