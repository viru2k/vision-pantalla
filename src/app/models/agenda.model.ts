

export class Agenda {

    
    public id:string;
    public fecha_turno:Date;
    public fecha_llegada:Date;
    public fecha_atendido:Date;
    public cirugia_grupo_medico_id:string;
    public medico_solicita_id:string;
    public agenda_estado_id:string;
    public agenda_tipo_atencion_id:string;
    public usuario_id:string;
    public codigo:string;
    public medico_nombre:string;
    public medico_apellido:string;
    public medico_solicita_nombre:string;
    public medico_solicita_apellido:string;
    public paciente_nombre:string;
    public paciente_apellido:string;
    public paciente_dni:string;
    public paciente_domicilio:string;
    public paciente_fecha_nacimiento:Date;
    public grupo_nombre:string;
    public agenda_estado:string;
    public fecha_matricula:Date;
    
    constructor(  id:string,
         fecha_turno:Date,
         fecha_llegada:Date,
         fecha_atendido:Date,
         cirugia_grupo_medico_id:string,
         medico_solicita_id:string,
         agenda_estado_id:string,
         agenda_tipo_atencion_id:string,
         usuario_id:string,
         codigo:string,
         medico_nombre:string,
         medico_apellido:string,
         medico_solicita_nombre:string,
         medico_solicita_apellido:string,
         paciente_nombre:string,
         paciente_apellido:string,
         paciente_dni:string,
         paciente_domicilio:string,
         paciente_fecha_nacimiento:Date,
         grupo_nombre:string,
         agenda_estado:string,
         fecha_matricula:Date) {
        
         this.id = id;
         this.fecha_turno= fecha_turno;
         this.fecha_llegada=fecha_llegada;
         this.fecha_atendido=fecha_atendido;
         this.cirugia_grupo_medico_id=cirugia_grupo_medico_id;
         this.medico_solicita_id=medico_solicita_id;
         this.agenda_estado_id=agenda_estado_id;
         this.codigo=codigo;
         this.agenda_tipo_atencion_id=agenda_tipo_atencion_id;
         this.usuario_id=usuario_id;  
         this.codigo=codigo; 
         this.medico_nombre=medico_nombre; 
         this.medico_apellido=medico_apellido; 
         this.medico_solicita_nombre=medico_solicita_nombre; 
         this.medico_solicita_apellido=medico_solicita_apellido; 
         this.paciente_nombre=paciente_nombre; 
         this.paciente_apellido=paciente_apellido; 
         this.paciente_dni=paciente_dni; 
         this.paciente_domicilio=paciente_domicilio; 
         this.paciente_fecha_nacimiento=paciente_fecha_nacimiento; 
         this.grupo_nombre=grupo_nombre; 
         this.agenda_estado=agenda_estado; 
         this.fecha_matricula = fecha_matricula;
    }
}