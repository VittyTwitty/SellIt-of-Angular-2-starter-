import { NgModule } from '@angular/core';
import { AddPostComponent } from './add-post.component';
import { routAddPost } from './add-post.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailValidationDirective } from '../shared/directives/validator-name.directive';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/guards/auth-guard.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        SharedModule,
        routAddPost,
    ],
    declarations: [AddPostComponent],
    exports: [AddPostComponent]
})

export class AddPostModule {}
