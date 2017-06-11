import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'sellit-add-post',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.scss']
})


export class AddPostComponent {
  //  @ViewChild('addTitle') el: ElementRef;

    public router: any;
    public data: any = {};

    constructor(private rd: Renderer2) { }

   // ngAfterViewInit() {
  //  }

    

    public addProduct($event, form) {
        $event.preventDefault();
        console.log($event);
        console.log(form.value);
        if (form.invalid) {
           // this.el.nativeElement.style = 'border-left: 4px solid red'
            return;
        }

    }
}