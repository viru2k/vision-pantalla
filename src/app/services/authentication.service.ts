import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS, PARAMS } from '../config/config';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    usuario:User;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        console.log(URL_SERVICIOS+"oauth/token");
       this.usuario = new User("","","","","",username,password,[]);
       console.log(this.usuario);
        return this.http.post<User>(URL_SERVICIOS+"oauth/token",this.usuario);
           /*  .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log("usuario: "+JSON.stringify(user));
              //  if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('userData', JSON.stringify(this.usuario));
                    localStorage.setItem('currentUser', JSON.stringify(user));
               // }

                return user;
            })); */
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userData');
        localStorage.removeItem('error');
    }
}

