import { Directive, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ProfileComponent } from '../../profile-page/profile-page.component';

@Directive({
  selector: '[profileAnchor]'
})
export class ProfileAnchorDirective {
    constructor(
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    public createProfile(profileComponent: {  new(...args: any[]): ProfileComponent }): ComponentRef<ProfileComponent> {
        this.viewContainer.clear();

        let profileComponentFactory = this.componentFactoryResolver.resolveComponentFactory(profileComponent);
        let profileComponentRef = this.viewContainer.createComponent(profileComponentFactory);

        profileComponentRef.instance.close.subscribe(() => {
            profileComponentRef.destroy();
        });

        return profileComponentRef;
    }
}
