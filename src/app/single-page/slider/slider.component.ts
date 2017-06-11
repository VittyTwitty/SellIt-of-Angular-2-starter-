import { Component, Input } from '@angular/core';
import { SinglePageComponent } from "../single-page.component";

@Component({
    selector: 'sellit-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.scss']
})

export class SliderComponent // extends SinglePageComponent
 {
    @Input() public photos;
    constructor () {
        console.log("FOTO " + this.photos)
    }
}