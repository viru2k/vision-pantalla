import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.throwAlert('error','Usuario o contraseña incorrectos',  'Verifique el usuario y contraseña, su sesion puede haber expirado',err.status);
                // auto logout if 401 response returned from api
              //  this.authenticationService.logout();// DEBEN SER DESBLOQUEADO CUANDO SE CORRIJA
               // location.reload(true);
               console.log("error en la autenticacion");
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    throwAlert(estado:string, mensaje:string, motivo:string, errorNumero:string){
        let tipoerror:string;
       let  _mensaje =  'Oops...';
        if(estado== 'success'){
            swal({
                type: 'success',
                title: 'Exito',
                text: mensaje
              })
        }
      
        if(errorNumero =='422'){
          mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
          swal({   
              type: 'warning',
              title: 'Atención..',
              text: mensaje,
              footer: motivo
            })
      }
      
      if(errorNumero =='99'){
        mensaje ='Debe seleccionar un paciente antes de cargar las prácticas';
        swal({   
            type: 'warning',
            title: 'Atención..',
            text: mensaje,
            footer: motivo
          })
      }
      
      if(errorNumero =='100'){
        mensaje ='El paciente posee una obra social que no esta habilitada';
        swal({   
            type: 'warning',
            title: 'Atención..',
            text: mensaje,
            footer: motivo
          })
      }
        if(estado === 'warning'){
          
          swal({   
              type: 'warning',
              title: 'Atención..',
              text: mensaje,
              footer: motivo
            })
        }
        
        if((estado== 'error')&&(errorNumero!='422')){
          if(errorNumero =='422'){
              mensaje ='Los datos que esta tratando de guardar son iguales a los que ya poseia';
          }
          if(errorNumero =='400 '){
              mensaje ='Bad Request ';
          }
          if(errorNumero =='404'){
              mensaje ='No encontrado ';
          }
          if(errorNumero =='401'){
              mensaje = 'Sin autorización';
              _mensaje = mensaje;
          }
          if(errorNumero =='403'){
              mensaje =' Prohibido : La consulta fue valida, pero el servidor rechazo la accion. El usuario puede no tener los permisos necesarios, o necesite una cuenta para operar ';
          }
          if(errorNumero =='405'){
              mensaje ='Método no permitido';
          }
          if(errorNumero =='500'){
              mensaje ='Error interno en el servidor';
          }
          if(errorNumero =='503'){
              mensaje ='Servidor no disponible';
          }
          if(errorNumero =='502'){
              mensaje ='Bad gateway';
          }
          
            swal({   
                type: 'error',
                title: _mensaje,
                text: mensaje,
                footer: motivo
              })
        }
      
      
      }
      }
      
      
      
      
      
      
      