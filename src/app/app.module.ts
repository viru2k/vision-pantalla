import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ROUTES } from './app.routes';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AutofocusModule } from 'angular-autofocus-fix';
import { EmptyComponent } from './pages/info/empty/empty.component';
import { NotFoundComponent } from './pages/info/not-found/not-found.component'; 
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { PacienteService } from './services/paciente.service';
import { HTTP_INTERCEPTORS,HttpClientModule  } from '@angular/common/http';
import {   LOCALE_ID, Injector} from '@angular/core';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NgxElectronModule } from 'ngx-electron';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {config } from './config/config';

@NgModule({
  declarations: [
    LoadingComponent,
    AppComponent,
    PrincipalComponent,
    EmptyComponent,
    NotFoundComponent
  ],
  imports: [ NgxElectronModule,FormsModule ,
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    AutofocusModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot( ROUTES, { useHash: true } ),
  ],
  providers: [PacienteService,
 // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
 {
  provide: HTTP_INTERCEPTORS,
  useFactory: function(injector: Injector) {
      return new JwtInterceptor(injector);
  },
  multi: true,
  deps: [Injector]
},
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
