
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import { Agenda } from '../models/agenda.model';
import { AgendaTurno } from '../models/agenda-turno.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private url_simple:string =URL_SERVICIOS;
  private url:string  = URL_SERVICIOS + 'pacienteagenda';
  private url_agenda:string  = URL_SERVICIOS + 'agenda/';

  constructor(public http: HttpClient) { }

getItem(id:number){
  return this.http.get<Agenda>(this.url+"/"+id);
  }

getItems(){
  return this.http.get<Agenda[]>(this.url);
  }

putItem(val:AgendaTurno, id:string){
  console.log(val); 
  return this.http.put<AgendaTurno>(this.url_agenda+id,val);
}


/* getTurnoPacienteByfecha(val:AgendaTurno,id:string){  
    return this.http.get<any[]>(this.url_agenda+"turno/by/paciente?fecha_turno="+fecha_turno+'&'+'paciente_id='+paciente_id);
  } */
  updatePresente(val:AgendaTurno,id:string){  
    return this.http.put<any[]>(URL_SERVICIOS+'totem/turno/presente/'+id,val);
  }

  llamarTurnoPaciente(val:AgendaTurno,id:string){  
    return this.http.put<any[]>(URL_SERVICIOS+'totem/turno/llamar/'+id,val);
  }
  
  turnoRecepcionPacienteNuevo(val:any){  
    return this.http.post<any[]>(URL_SERVICIOS+'totem/paciente/nuevo', val);
  }

  
  turnoRecepcionPacienteExistente(val:any){  
    return this.http.post<any[]>(URL_SERVICIOS+'totem/paciente/existente', val);
  }
  
  getTurnoPantallaLlamando(){  
    return this.http.get<any[]>(URL_SERVICIOS+'pantalla/turno/llamando');
  }

  getTurnoPantallaAtendido(){  
    return this.http.get<any[]>(URL_SERVICIOS+'pantalla/turno/ingresado');
  }

  
  getPuestoLlamando(){  
    return this.http.get<any>(URL_SERVICIOS+'agenda/turno/pantalla/puesto/llamando');
  }


  
} 


