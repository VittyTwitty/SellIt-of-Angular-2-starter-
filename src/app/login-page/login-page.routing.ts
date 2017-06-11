import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';
import { LoginPageComponent } from "./login-page.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";



export const loginRoutes: Routes = [
   { path: 'sellit-login-page', component: LoginPageComponent,
        children: [{
            path: 'sellit-sign-in',
            component: SignInComponent,
            outlet: 'sellit-login-registr'
        },
        {
            path: 'sellit-sign-up',
            component: SignUpComponent,
            outlet: 'sellit-login-registr'
        }]    
    }


];