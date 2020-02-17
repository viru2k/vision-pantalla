import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import {Paciente} from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PacienteService {



    private url:string  = URL_SERVICIOS + 'paciente';

      constructor(public http: HttpClient) { }

      getItem(id:string){
        return this.http.get<Paciente>(this.url+"/"+id);
      }

   

    getItems(consulta:string, valor:string){
      return this.http.get<Paciente[]>(this.url+"/"+"by/consulta?consulta="+consulta+"&valor="+valor);
      }

    putItem(paciente:Paciente, id:string){
   //   console.log(this.url+"/"+id);
      console.log(paciente); 
      return this.http.put<Paciente>(this.url+"/"+id,paciente);
    }

    postItem(paciente:Paciente){
      console.log(paciente); 
      return this.http.post<Paciente>(this.url, paciente);
    }

    getPacienteObraSocialTodas(consulta:string, valor:string, id:string){
      return this.http.get<Paciente>(this.url+"/by/consulta?consulta="+consulta+"&valor="+valor+"&id="+id);
      }

    getPacienteObraSocialHabilitada(consulta:string, valor:string, id:string){
      return this.http.get<Paciente>(this.url+"/by/consulta?consulta="+consulta+"&valor="+valor+"&id="+id);
      }

      getPacienteDni(dni:string){
        return this.http.get<Paciente[]>(this.url+"/totem/dni?dni="+dni);
        }
}
