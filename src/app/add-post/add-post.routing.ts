import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';

const routesAddPost: Routes = [
    { path: 'sellit-add-post', component: AddPostComponent, canActivate: [AuthGuard] },

];

export const routAddPost: ModuleWithProviders = RouterModule.forChild(routesAddPost);
