import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { validateName } from "../shared/directives/validators/validator-name.directive";
import { validatePrice } from "../shared/directives/validators/validator-price.directive";
import { validatePhone } from "../shared/directives/validators/validator-phone.directive";
import { validateFotoPicker } from "../shared/directives/validators/validator-photo-picker.directive";

@Component({
    selector: 'sellit-add-post',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.scss']
})


export class AddPostComponent {


    constructor(private formBuilder: FormBuilder, private el: ElementRef) {
        // this.el.nativeElement.style.display = 'none';
    }

    public addProductForm: FormGroup = new FormGroup({

        title: new FormControl('', [Validators.required, Validators.maxLength(30), validateName]),
        description: new FormControl('', Validators.maxLength(300)),
        price: new FormControl('', [Validators.required, Validators.maxLength(10), validatePrice]),
        author: new FormControl('', [Validators.required, Validators.minLength(3), validateName]),
        phone: new FormControl('', validatePhone),
        photo: new FormControl('')

    })

    changeListenerImg(event) {
        let file = event.srcElement.files[0];
        let fileName = file.name;
        let myElem = document.getElementById('add-post_upload-img-name');
        myElem.innerHTML = fileName;
        
        
    }


    addProduct($event) {
        $event.preventDefault();
        console.log(this.addProductForm.value);
    }



}