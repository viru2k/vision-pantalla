export class Paciente {
    public id:string;
    public dni:string;
    public apellido:string;
    public nombre:string;
    public domicilio:string;
    public sexo:string;
    public fecha_nacimiento:Date;    
    public ciudad:string;
    public telefono_fijo:string;
    public telefono_cel:string;
    public email:string;    
    public tiene_whatsapp:string;
    public obra_social_id:string;
    public es_habilitada:string;
    public obra_social_nombre:string;
    public coseguro_id:string;
    public coseguro_nombre:string;
    public usuario_alta_id:string;
    public numero_afiliado:string; 
    public barra_afiliado:string;
    public plan:string;
    public tiene_distribucion:string;
    public es_coseguro:string;    
    public coseguro_tiene_distribucion:string;
    public coseguro_es_coseguro:string;
    public gravado_adherente:string;

    constructor(id:string,dni:string, apellido:string, nombre:string, domicilio:string, sexo:string,
    fecha_nacimiento:Date, ciudad:string, telefono_fijo:string,
    telefono_cel:string, email:string ,tiene_whatsapp:string, obra_social_id:string,
     obra_social_nombre:string,coseguro_nombre:string, coseguro_id:string, usuario_alta_id:string, numero_afiliado:string, barra_afiliado:string,plan:string, tiene_distribucion:string,
      es_coseguro:string,coseguro_tiene_distribucion:string, coseguro_es_coseguro:string,es_habilitada:string,gravado_adherente:string ) {
        this.id = id;
        this.dni = dni;
        this.apellido = apellido;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.sexo = sexo;
        this.fecha_nacimiento = fecha_nacimiento;        
        this.ciudad = ciudad;
        this.telefono_fijo = telefono_fijo;
        this.telefono_cel = telefono_cel;
        this.email = email;
        this.tiene_whatsapp = tiene_whatsapp;
        this.obra_social_id = obra_social_id;
        this.obra_social_nombre = obra_social_nombre;
        this.coseguro_id = coseguro_id;
        this.coseguro_nombre = coseguro_nombre;
        this.usuario_alta_id = usuario_alta_id;
        this.numero_afiliado = numero_afiliado;
        this.barra_afiliado = barra_afiliado;
        this.plan = plan;
        this.tiene_distribucion = tiene_distribucion;
        this.es_coseguro = es_coseguro;
        this.coseguro_tiene_distribucion = coseguro_tiene_distribucion;
        this.coseguro_es_coseguro = coseguro_es_coseguro;
        this.es_habilitada = es_habilitada;
        this.gravado_adherente = gravado_adherente;
    }
}