import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PacienteService } from './../../services/paciente.service';
import { Paciente } from '../../models/paciente.model';
import { timer } from 'rxjs';
import swal from 'sweetalert2';
import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { AgendaService } from '../../services/agenda.service';
import { formatDate } from '@angular/common';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ElectronService } from 'ngx-electron';


import { Subscription } from 'rxjs';

import { Observable } from 'rxjs/Rx';
import { DocumentService } from './../../services/document-service.service';
declare const require: any;
const jsPDF = require('jspdf');
declare var electron: any;
declare var ipc: any;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;
 documento:string = '';
 loading:boolean;
 existe:boolean;
 elementos:any[] = null;
 elementosAtendidos:any[] = null;
 elementoPaciente:Paciente = null;
 elementoLlamando:any = null;
 elementoTurno:any = null;
 elemento:any = null;
 elementoModulo:[] = null;
 user:User;
 username:string;
 loggedIn:boolean = false;
 imprimir:boolean = false;
 nuevo:boolean = false;
 horario:any;
 llamando:boolean;
 
 estado:string = 'CONECTANDO CON EL SERVIDOR';
 motivo_turno:string;
 time = new Date();
 texto_largo:boolean;
 largo:number;
//ipc = require ('electron').ipcRenderer;
  constructor(private documentService: DocumentService,private pacienteService:PacienteService,private agendaService:AgendaService, private authenticationService: AuthenticationService, private miServico:UserService,private _electronService: ElectronService ) {
    
    
   }

  ngOnInit() {
    
    setInterval(() => {
      this.time = new Date();
   }, 1000);
   
  //  this.authenticationService.logout();
  //this.playPingPong();
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  console.log(currentUser);
  if(currentUser){
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    console.log('usuario logueado');
    this.loggedIn = true;
       this.username = userData['username'];
       console.log(userData['access_list']);

       let timer = Observable.timer(180000,180000);//180000 -- 3 minutos inicia y en 3 minutos vuelve a llamar
       timer.subscribe(t=> {
         console.log('bucando turnos');
      //   this.getTurnoPantallaLlamando();
        // this.getTurnoPantallaAtendido();
       });
       this.asignarModulos(userData['access_list']);
       this.playAudio();
       this.documentService
       .getMessages()
       .subscribe((message: string) => {
         console.log(message);
         if(message ==='llamando-pantalla'){
           this.getPuestoLlamando();
            
        
         this.playAudio();
         setTimeout(() => {
          this.llamando = false;
      }, 10000); //5000
         }
       });
       

       //this.menuList();
  }else{
    this.onSubmit();
  }
  this.onSubmit();

  }


  playAudio(){
    let audio = new Audio();
    audio.src = './assets/sound/60468doorbell.mp3';
    audio.load();
    audio.play();
  }


  agregarCaracter(numero:string){
    this.documento = this.documento+numero;
  }

  borrarCaracter(){
    this.documento= this.documento.substring(0, this.documento.length - 1);
  }

  onSubmit() {

    this.loading = true;
    this.estado = 'AUTENTICANDO APLICACION';
    this.authenticationService.login('clinica','clinica1234')
       // .pipe(first())
        .subscribe(
            data => {
              this.user = data;
              //let us = new User("","","","","",'admin','admin',[]);
              let us = new User("","","","","",'clinica','clinica1234',[]);
              localStorage.setItem('userData', JSON.stringify(us));
              localStorage.setItem('currentUser', JSON.stringify(this.user));
              //  this.router.navigate([this.returnUrl]);
              this.loadUser();
            },
            error => {
            
              console.log(error);
               // this.error = error;
                this.loading = false;
            });
  }

loadUser(){

  this.loading = true;
  try {
    this.miServico.getItemInfoAndMenu('clinica')
      .subscribe(resp => {
      this.elemento = resp;
     
         let currentUser =  JSON.parse(localStorage.getItem('currentUser'));
         let userData = JSON.parse(localStorage.getItem('userData'));
         console.log(this.elemento);
         this.elementoModulo = <any>this.elemento;
        this.user = new User(this.elemento[0]['id'] , this.elemento[0]['email'], this.elemento[0]['nombreyapellido'],
         this.elemento[0]['name'],'1',this.elemento[0]['email'], currentUser['access_token'],this.elementoModulo);
         this.username = userData['username'];
         localStorage.removeItem('userData');
         localStorage.setItem('userData', JSON.stringify(this.user));
         this.asignarModulos(this.elementoModulo);       
       //  this.getTurnoPantallaLlamando();
       //  this.getTurnoPantallaAtendido();
          this.loading = false;
          console.log('logueado');
          this.loggedIn = true;
        
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
          localStorage.removeItem('error');
          localStorage.setItem('error', JSON.stringify(error));
           
      //    this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message);
       });    
  } catch (error) {
  //  this.throwAlert('error','Error al cargar los registros',error);
  }  
  }
  

  asignarModulos(modulos: any){
    modulos.forEach(element => {
     // console.log(element['modulo_nombre']);
    
    });
    this.getTurnoPantallaLlamando();
    this.getTurnoPantallaAtendido();  
  
  }




  getPuestoLlamando(){
    

    try {
      this.agendaService.getPuestoLlamando()
      .subscribe(resp => {
        console.log(resp);
        if(resp.length>0){
          
          this.elementoLlamando = resp[0];
          //if(this.elementoLlamando[''])
          console.log(this.elementoLlamando);
          this.llamando = true;
          this.getTurnoPantallaLlamando();
          this.getTurnoPantallaAtendido();  
        }else{

        }
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
       //   this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
       });    
  } catch (error) {
  //this.throwAlert('error','Error al cargar los registros',error,error.status);
  }  
  }


  getTurnoPantallaAtendido(){
    

    try {
      this.agendaService.getTurnoPantallaAtendido()
      .subscribe(resp => {
        console.log(resp);
        if(resp.length>0){
          this.elementosAtendidos = resp;
          let i:number = 0;
          let resultado = resp;
          let puesto_llamando:string;
          resultado.forEach(element => {
            this.texto_largo = true;
            puesto_llamando = resp[i]['puesto_llamado'];
            this.largo = puesto_llamando.length;
            if(puesto_llamando.length >4  ){
              this.texto_largo = true;
              resp[i]['nombreyapellido'] = resp[i]['puesto_llamado'];
              resp[i]['puesto_llamado'] = '';
            }else{
              this.texto_largo = false;
            }                         
        //    let t = formatDate( element['fecha_cobro'], 'dd/MM/yyyy', 'en');
        
            i++;
          });
        }else{
          this.existe= true;
          this.loading = false;
          this.estado = '';
        }
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
       //   this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
       });    
  } catch (error) {
  //this.throwAlert('error','Error al cargar los registros',error,error.status);
  }  
  }

  getTurnoPantallaLlamando(){



    try {
      this.agendaService.getTurnoPantallaLlamando()
      .subscribe(resp => {
        console.log(resp);
        if(resp.length>0){
          this.elementos = resp;
        }else{
          this.existe= true;
          this.loading = false;
          this.estado = '';
        }
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
       //   this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
       });    
  } catch (error) {
  //this.throwAlert('error','Error al cargar los registros',error,error.status);
  }  



  }
  
  //VALIDO SI EL PACIENTE EXISTE
  buscarPaciente(){
  
    //seteo el valor nuevo
    this.nuevo = false;

    if(this.documento.length>0){
      if(this.documento.length>=6){
      this.existe= false;
    this.loading = true;
    this.estado = 'BUSCANDO PACIENTE';
    try {
        this.pacienteService.getPacienteDni(this.documento)
        .subscribe(resp => {
          if(resp.length>0){
            // SI EL PACIENTE EXISTE PROCEDO A BUSCAR EL TURNO DEL DIA
        this.elementoPaciente = resp[0];
            this.loading = false;
            this.estado = '';

            console.log(resp);
            console.log('paciente existente');      

            this.existe = false;
            swal({
              
              imageUrl: './assets/user.png',
              imageHeight: 200,
              imageWidth: 200,
              title: 'BIENVENIDO  '+ this.elementoPaciente['apellido']+' '+this.elementoPaciente['nombre'],
              showConfirmButton: false,
              timer: 3000,
              onClose: () => {
                console.log('timer terminado existente');
                this.turnoRecepcionPacienteExistente();
              },
              backdrop: `
              rgba(26, 188, 156,0.7)
              no-repeat `
            });


          } else {
            console.log('paciente inexistente');        
            this.existe = true;
            this.loading = false;
            this.elementoPaciente = new Paciente('',this.documento, '','','','',new Date(),'','','','','','','','','','','','','','','','','','','');
            swal({
              
              imageUrl: './assets/user.png',
              imageHeight: 200,
              imageWidth: 200,
              title: 'BIENVENIDO, USTED ES PACIENTE NUEVO DE LA CLINICA ',
              showConfirmButton: false,
              timer: 3000,
              onClose: () => {
                console.log('timer terminado paciente nuevo');
                this.turnoRecepcionPacienteNuevo();
              },
              backdrop: `
              rgba(26, 188, 156,0.7)
              no-repeat `
            });
         
          }
        },
        error => { // error path
            console.log(error.message);
            console.log(error.status);
            this.loading = false;
            this.estado = 'HUBO UN PROBLEMA ...  estado: '+error.status+' error : '+error.message;
         });
    } catch (error) {
      this.loading = false;
      this.estado = 'HUBO UN PROBLEMA ...  estado: '+error.status+' error : '+error.message;
    }  
  }else{

    swal({
      text:'LA CANTIDAD DE DIGITOS ES MENOR 6',
      imageUrl: './assets/user-wrong.png',
      imageHeight: 200,
      imageWidth: 200, 
      title: 'SU D.N.I NO ES CORRECTO',
      showConfirmButton: false,
      timer: 4000,
      onClose: () => {
        console.log('dni corto');     
      },
      backdrop: `
      rgba(26, 188, 156,0.7)
      no-repeat `
    });
  }
  }
}



turnoRecepcionPacienteNuevo(){
  this.existe= false;
  this.loading = true;
  this.estado = 'CREANDO TURNO PARA EL PACIENTE';
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  try {
      this.agendaService.turnoRecepcionPacienteNuevo(this.elementoPaciente)
      .subscribe(resp => {
        if(resp.length>0){
          let es_observacion:string = resp[0]['es_observacion'];
          let usuario_id:number = resp[0]['usuario_id'];
          let apellido:string = resp[0]['apellido'];
          let nombre:string = resp[0]['nombre'];

          if((nombre === '-')){
            resp[0]['nombre'] ='';
          }

          if((apellido === '-')){
            resp[0]['apellido'] ='';
          }

          if((es_observacion === '-')||(es_observacion === '')){
            resp[0]['es_observacion'] ='TURNO';
          }

          if((usuario_id === 23)){
            resp[0]['nombreyapellido'] ='';
          }else{
            resp[0]['nombreyapellido'] ='Turno con : '+ resp[0]['nombreyapellido']; 
          }
          this.loading = false;
          
          this.elementoTurno = resp[0];   
          this.nuevo = true;
          swal({
            text:'GENERANDO TICKET ',
            imageUrl: './assets/printer-icon.png',
            imageHeight: 200,
            imageWidth: 200,
            title: 'IMPRIMIENDO',
            showConfirmButton: false,
            timer: 2000,
            onClose: () => {
              console.log('IMPRIMIENDO');
              this.generarPdf();
            },
            backdrop: `
            rgba(26, 188, 156,0.7)
            no-repeat `
          });
        }else{
          this.existe= true;
          this.loading = false;
          this.estado = '';
        }
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
       //   this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
       });    
  } catch (error) {
  //this.throwAlert('error','Error al cargar los registros',error,error.status);
  }  
}
 

turnoRecepcionPacienteExistente(){
  this.existe= false;
  this.loading = true;
  let _fechaEmision = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  try {
      this.agendaService.turnoRecepcionPacienteExistente(this.elementoPaciente)
      .subscribe(resp => {
        console.log(resp);
        if(resp.length>0){

                  
          // VALIDO LOS DATOS QUE VUELVEN Y LOS CAMBIO SEGUN SEA REQUERIDO    
          let es_observacion:string = resp[0]['es_observacion'];
          let usuario_id:number = resp[0]['usuario_id'];

          if((es_observacion === '-')||(es_observacion === '')){
            resp[0]['es_observacion'] ='TURNO';
          }
          
          if((es_observacion === 'ADVERTENCIA')){
            resp[0]['es_observacion'] ='TURNO';
          }
          console.log('turno depurado');
          if((usuario_id === 23)){
            console.log('clinica');
            resp[0]['nombreyapellido'] ='';
          }else{
            resp[0]['nombreyapellido'] ='Turno con : '+ resp[0]['nombreyapellido']; 
          }
          this.loading = false;
          
          this.elementoTurno = resp[0];   
          console.log(this.elementoTurno);
          this.existe= false;

          swal({
            text:'GENERANDO TICKET ',
            
            imageHeight: 200,
            imageWidth: 200,
            title: 'IMPRIMIENDO',
            showConfirmButton: false,
            timer: 2000,
            onClose: () => {
              console.log('IMPRIMIENDO');
              this.generarPdf();
            },
            backdrop: `
            rgba(26, 188, 156,0.7)
            no-repeat `
          });
          
          
        }else{
          this.existe= true;
          this.loading = false;
        }
      },
      error => { // error path
          console.log(error.message);
          console.log(error.status);
      //    this.throwAlert('error','Error: '+error.status+'  Error al cargar los registros',error.message, error.status);
       });    
  } catch (error) {
 // this.throwAlert('error','Error al cargar los registros',error,error.status);
  }  
}






generarPdf(){
  this.documento ='';
  this.imprimir = true;
  console.log(this.myDiv.nativeElement.innerHTML);
  this.horario = formatDate(new Date(), 'dd/MM/yyyy hh:mm', 'en');
   

 
  ipc.send('print-to-pdf',  this.myDiv.nativeElement.innerHTML);
  

  ipc.on('wrote-pdf', function(event, path){
    this.documento ='';

    console.log('respueta recibida '+ path);

  });

  setTimeout(() => 
{
 
    this.imprimir =  false;
    this.elementoPaciente = null;
},
3000);

}
}

