import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { appRoutes } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { SliderComponent } from "./single-page/slider/slider.component";
import { SignUpComponent } from "./login-page/sign-up/sign-up.component";
import { SignInComponent } from "./login-page/sign-in/sign-in.component";
import { ProfileComponent } from "./shared/profile-page/profile-page.component";


import { ProductService } from "./shared/services/sellit-product.service";

import '../styles/styles.scss';
import '../styles/headings.css';
import { BtnScrollTopComponent } from "./shared/button-scrolltop/button-scrolltop.component";
import { ScrollTopDirective } from "./shared/directives/scroll-top.directive";
import { ScrollPushItemsDirective } from "./shared/directives/scroll-push.directive";
import { CloseButtonDirective } from "./shared/directives/close-button.directive";
import { OpenButtonDirective } from "./shared/directives/open-button.directive";


import { ChatComponent } from "./shared/chat/chat.component";
import { LoginPageModule } from "./login-page/login-page.module";
import { SharedModule } from "./shared/shared.module";
import { AddPostModule } from "./add-post/add-post.module";
import { RandomPhotoService } from "./shared/services/random-photo.service";



// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    //AboutComponent,
   // HomeComponent,
    //NoContentComponent,
    //XLargeDirective,
    Footer,
    Header,
    ProductItemComponent,
    ProductListComponent,
    SinglePageComponent,
    BtnScrollTopComponent,
    SliderComponent,
    ProfileComponent,
    //SignInComponent,
    //SignUpComponent,
    ChatComponent,
    ScrollTopDirective,
    ScrollPushItemsDirective,
    CloseButtonDirective,
    OpenButtonDirective
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LoginPageModule,
    AddPostModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
    ProductService,
    RandomPhotoService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues  = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}