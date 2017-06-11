import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from "./add-post.component";

const routesAddPost: Routes = [
    { path: 'sellit-add-post', component: AddPostComponent }
];

export const routAddPost: ModuleWithProviders = RouterModule.forChild(routesAddPost);