import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { validateName } from "../shared/directives/validators/validator-name.directive";
import { validatePrice } from "../shared/directives/validators/validator-price.directive";
import { validatePhone } from "../shared/directives/validators/validator-phone.directive";
import { validateFotoPicker } from "../shared/directives/validators/validator-photo-picker.directive";
import { AuthService } from "../core/auth.service";
import { User } from "../shared/models/user.model";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

@Component({
    selector: 'sellit-add-post',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.scss']
})


export class AddPostComponent {
    currentUser: User;
    fD: FormData;
    photos: any = {};



    constructor(private router: Router, private http: Http, private formBuilder: FormBuilder, private el: ElementRef, private authService: AuthService) {
        // this.el.nativeElement.style.display = 'none';


        this.currentUser = this.authService.userTokenDate()
    }

    public addProductForm: FormGroup = new FormGroup({

        title: new FormControl('', [Validators.required, Validators.maxLength(30), validateName]),
        description: new FormControl('', Validators.maxLength(300)),
        price: new FormControl('', [Validators.required, Validators.maxLength(10), validatePrice]),
        photos: new FormControl('')

    })

    changeListenerImg($event) {

        // Добавление текста
        let file = $event.srcElement.files[0];
        let fileName = file.name;
        let myElem = document.getElementById('add-post_upload-img-name');
        myElem.innerHTML = fileName;


        let inputValue = $event.target || $event.srcElement;
        this.photos = inputValue.files;

    }


    addProduct($event, form) {
        $event.preventDefault();
        
        if (this.photos) {
            let files: FileList = this.photos;
            this.fD = new FormData();
            for (let i = 0; i < files.length; i++) {
                this.fD.append('photo', files[i]);
            }
        }

        let finalyForm = {
            title: form.value.title,
            description: form.value.description,
            price: form.value.price,
            author: this.currentUser.id,
            date_create: new Date(),
            photos: []
        };
        console.log(finalyForm.photos);

        this.authService.photos(this.fD)
            .subscribe(
            data => {
                finalyForm.photos = data;
                console.log(finalyForm.photos)
                this.authService.addPost(finalyForm)
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



    }



}