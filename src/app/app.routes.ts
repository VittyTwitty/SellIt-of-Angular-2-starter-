import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';

import { ProductListComponent } from "./product-list/product-list.component";
import { SinglePageComponent } from "./single-page/single-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignUpComponent } from "./login-page/sign-up/sign-up.component";
import { SignInComponent } from "./login-page/sign-in/sign-in.component";
import { ProfileComponent } from "./shared/profile-page/profile-page.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { AuthGuard } from "./core/auth-guard";

export const appRoutes: Routes = [
    {
        path: '', component: ProductListComponent
    },
    {
        path: 'single-item/:id', component: SinglePageComponent
    },
    {
        path: 'sellit-profile', component: ProfileComponent
    },
    {
        path: 'sellit-add-post', loadChildren: 'app/add-post/add-post.module#AddPostModule'
    },
    /*{ path: 'sellit-login-page', component: LoginPageComponent,
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
    } */


];
