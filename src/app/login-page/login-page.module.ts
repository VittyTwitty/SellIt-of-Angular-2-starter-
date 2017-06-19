import { NgModule } from '@angular/core'
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./login-page.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthGuard } from '../quards/auth.guard';
import { loginRoutes } from "./login-page.routing";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
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