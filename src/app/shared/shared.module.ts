import { NgModule } from '@angular/core';
import { ScrollTopDirective } from './directives/scroll-top.directive';
import { CommonModule } from '@angular/common';
import { EmailValidationDirective } from './directives/validator-name.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollPushItemsDirective } from './directives/scroll-push.directive';

import { ValidatorNameDirective } from './directives/validators/validator-name.directive';
import { ValidatorEmailDirective } from './directives/validators/validator-email.directive';
import { ValidatorPhoneDirective } from './directives/validators/validator-phone.directive';
import { ValidatorPriceDirective } from './directives/validators/validator-price.directive';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ProfileComponent } from './profile-page/profile-page.component';
import { RouterModule } from '@angular/router';
import { OpenButtonDirective } from './directives/open-button.directive';
import { CloseButtonDirective } from './directives/close-button.directive';
import { SafePipe } from './pipes/valuePipe';
import { SearchComponent } from './header/search/search.component';
import { RoundPipe } from './pipes/roundPipe';
import { ProfileAnchorDirective } from './directives/validators/profile-anchor.directive';
import { ChangePostComponent } from './profile-page/change-post/change-post.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    declarations:
    [
        ValidatorNameDirective,
        ValidatorEmailDirective,
        ValidatorPhoneDirective,
        ValidatorPriceDirective,
        OpenButtonDirective,
        CloseButtonDirective,
        ProfileAnchorDirective,
        Header,
        Footer,
        SearchComponent,
        ProfileComponent,
        ChangePostComponent,
        SafePipe,
        RoundPipe
    ],
    exports:
    [
        ValidatorNameDirective,
        ValidatorEmailDirective,
        ValidatorPhoneDirective,
        ValidatorPriceDirective,
        OpenButtonDirective,
        CloseButtonDirective,
        ProfileAnchorDirective,
        FormsModule,
        CommonModule,
        SearchComponent,
        ChangePostComponent,
        Header,
        Footer,
        ProfileComponent,
        RoundPipe,
        SafePipe,
    ]
})

export class SharedModule { }
