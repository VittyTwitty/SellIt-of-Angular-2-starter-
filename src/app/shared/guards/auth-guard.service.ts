import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivateChild } from "@angular/router";
import { AuthService } from "../../core/auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

        let url: string = state.url;

        return this.checkLogin(url);

    }

    checkLogin(url: string) {
        if (this.authService.loggedIn()) {
            console.log('Авторизировано');
            return true;
        } else {
            this.authService.redirectUrl = url;
            // Navigate to the login page with extras
            this.router.navigate(
                    ['/sellit-login-page',
                        {
                            outlets: { 'sellit-login-registr': ['sellit-sign-in'] }
                        }
                    ]
                )
            console.log("Иди логинься");
            return false;
        }
    }

}




// if (this.authService.loggedIn) {
//     console.log(this.authService.loggedIn());
//     return true;
// } else {
//     console.log(this.authService.loggedIn());
//     return false;
// }