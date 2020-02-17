import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
result:boolean = false;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (localStorage.getItem('currentUser')) {
            
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let userData = JSON.parse(localStorage.getItem('userData'));
            // logged in so return true
            userData['access_list'].forEach(element => {
                console.log('coincidencia');
              // console.log(element['modulo_nombre']);
              //  console.log(route.data.role);
                if (element['modulo_nombre'] === route.data.role) {
                    this.result = true;
                    return this.result;
                  }
            });
            if(!this.result){
                
                this.router.navigate(['/404']);
                return this.result;
            }
        }
     
        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return this.result;
    }
}