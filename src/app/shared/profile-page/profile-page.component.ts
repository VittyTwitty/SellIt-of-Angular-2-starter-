import { Component } from '@angular/core';
import { RandomPhotoService } from "../services/random-photo.service";

@Component({
    selector: 'sellit-profile',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['profile-page.component.scss']
})

export class ProfileComponent {
    photoRandom: any[];
    constructor(private randomPhotoService: RandomPhotoService) {
        this.randomPhotoService.getPhotosRandom().subscribe( data => {
            this.photoRandom = data;
            console.log(this.photoRandom);
        })
    }
}