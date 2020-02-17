export class AgendaTurno {

    id:string;
    hora_desde:Date;
    hora_hasta:Date; 
    hora_desde_hasta:Date;
    agenda_dia_horario_atencion_id:string;
    fecha_turno:string;
    llegada:string;
    atendido:string;
    agenda_estado_id:string;
    estado:String;
    agenda_dia_id:string;
    usuario_id:string;
    nombreyapellido:string;
    dia_nombre:string;
    dia_nro:string;
    paciente_id:string;
    paciente_nombre:string;
    paciente_apellido:string;
    paciente_dni:string;
    paciente_fecha_nacimiento:string;
    paciente_obra_social_id:string;
    paciente_obra_social_nombre:string;
    paciente_coseguro_nombre:string;
    paciente_coseguro_id:string;
    numero_afiliado:string;
    barra_afiliado:string;
    coseguro_es_coseguro:string;
    tiene_distribucion:string;
    coseguro:string;
    fecha_matricula:Date;
    es_alerta:string;
    observacion:string;
    codigo_old:string;
    plan:string;
    domicilio:string; 
    es_observacion:string; 
    operacion_cobro_id:string;
    agenda_creacion:string;
    es_sobreturno:string;
    constructor( 
        id:string,
        hora_desde:Date,
        hora_hasta:Date, 
        hora_desde_hasta:Date,
        agenda_dia_horario_atencion_id:string,
        fecha_turno:string,
        llegada:string,
        atendido:string,
        agenda_estado_id:string,
        estado:String,
        agenda_dia_id:string,
        usuario_id:string,
        nombreyapellido:string,
        dia_nombre:string,
        dia_nro:string,
        paciente_id:string,
        paciente_nombre:string,
        paciente_apellido:string,
        paciente_dni:string,
        paciente_fecha_nacimiento:string,
        paciente_obra_social_id:string,
        paciente_obra_social_nombre:string,
        paciente_coseguro_nombre:string,
        paciente_coseguro_id:string,
        numero_afiliado:string,
        barra_afiliado:string,
        coseguro_es_coseguro:string,
        coseguro:string,
        tiene_distribucion:string,
        fecha_matricula:Date,
        codigo_old:string,
        plan:string,
        domicilio:string,
        es_observacion:string,
        operacion_cobro_id:string,
        agenda_creacion:string,
        es_sobreturno:string
        ) {
       
        this.id = id;
        this.hora_desde= hora_desde;
        this.hora_hasta= hora_hasta;
        this.hora_desde_hasta= hora_desde_hasta;
        this.agenda_dia_horario_atencion_id = agenda_dia_horario_atencion_id;
        this.fecha_turno = fecha_turno;
        this.llegada = llegada;
        this.atendido = atendido;
        this.agenda_estado_id = agenda_estado_id;
        this.estado = estado;
        this.agenda_dia_id = agenda_dia_id;
        this.usuario_id = usuario_id;
        this.nombreyapellido = nombreyapellido;
        this.dia_nombre = dia_nombre;
        this.dia_nro = dia_nro;
        this.paciente_id = paciente_id;
        this.paciente_nombre = paciente_nombre;
        this.paciente_apellido = paciente_apellido;
        this.paciente_dni = paciente_dni;
        this.paciente_fecha_nacimiento = paciente_fecha_nacimiento;
        this.paciente_obra_social_id = paciente_obra_social_id;
        this.paciente_obra_social_nombre = paciente_obra_social_nombre;
        this.paciente_coseguro_id = paciente_coseguro_id;
        this.paciente_coseguro_nombre = paciente_coseguro_nombre;
        this.numero_afiliado = numero_afiliado;
        this.barra_afiliado = barra_afiliado;
        this.coseguro_es_coseguro = coseguro_es_coseguro;
        this.tiene_distribucion = tiene_distribucion;
        this.coseguro = coseguro;
        this.fecha_matricula = fecha_matricula;
        this.codigo_old = codigo_old;
        this.plan = plan;
        this.domicilio = domicilio;
        this.es_observacion = es_observacion;
        this.operacion_cobro_id = operacion_cobro_id;
        this.agenda_creacion = agenda_creacion;
        this.es_sobreturno = es_sobreturno;
   }
}