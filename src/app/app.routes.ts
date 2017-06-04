import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';

import { ProductListComponent } from "./product-list/product-list.component";
import { SinglePageComponent } from "./single-page/single-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AuthPageComponent } from "./auth-page/auth-page.component";

export const appRoutes: Routes = [
    { path: '', component: ProductListComponent},
    { path: 'single-item/:id', component: SinglePageComponent },
    { path: 'sellit-login-page', component: LoginPageComponent },
    { path: 'sellit-auth-page', component: AuthPageComponent }
];
