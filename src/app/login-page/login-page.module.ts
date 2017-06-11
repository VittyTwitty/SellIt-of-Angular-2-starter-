import { NgModule } from '@angular/core'
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./login-page.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { loginRoutes } from "./login-page.routing";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(loginRoutes)
    ],
    declarations: [
        LoginPageComponent,
        SignInComponent,
        SignUpComponent,
    ],
    exports: [LoginPageComponent]

})
export class LoginPageModule {
    
}