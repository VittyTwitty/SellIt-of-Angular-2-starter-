import { NgModule } from '@angular/core';
import { ScrollTopDirective } from "./directives/scroll-top.directive";
import { CommonModule } from "@angular/common";
import { EmailValidationDirective } from "./directives/validator-name.directive";
import { FormsModule } from "@angular/forms";
import { ScrollPushItemsDirective } from "./directives/scroll-push.directive";

import { ValidatorNameDirective } from "./directives/validators/validator-name.directive";
import { ValidatorEmailDirective } from "./directives/validators/validator-email.directive";
import { ValidatorPhoneDirective } from "./directives/validators/validator-phone.directive";
import { ValidatorPriceDirective } from "./directives/validators/validator-price.directive";


@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: 
    [         
        ValidatorNameDirective,
        ValidatorEmailDirective,
        ValidatorPhoneDirective,
        ValidatorPriceDirective
    ],
    exports: 
    [      
        ValidatorNameDirective,
        ValidatorEmailDirective,
        ValidatorPhoneDirective,   
        ValidatorPriceDirective,   
        FormsModule,
        CommonModule 
    ]
})

export class SharedModule {
    
}