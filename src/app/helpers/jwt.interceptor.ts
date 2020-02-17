import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(private injector: Injector) {}
  //  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser){
      //      console.log(currentUser["access_token"]);
        }
        if (currentUser && currentUser["access_token"]) {
            request = request.clone({
                setHeaders: { 
                 //   Authorization: `Bearer ${currentUser.token}`
                 Authorization: `Bearer ${currentUser["access_token"]}`
                }
            });
        }

        return next.handle(request);
    }
}