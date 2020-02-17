export class UsuarioModulo {

    id:string;
    name:string;
    nombreyapellido:string;
    email:string;
    modulo_id:string;
    modulo_nombre:string;
    user_modulo_id:string;

    constructor( 
        id:string,
        name:string,
        nombreyapellido:string,
        email:string,
        modulo_id:string,
        modulo_nombre:string,
        user_modulo_id:string
    ){
        this.id = id;
        this.name = name;
        this.nombreyapellido = nombreyapellido;
        this.email = email;
        this.modulo_id = modulo_id;
        this.modulo_nombre = modulo_nombre;
        this.user_modulo_id = user_modulo_id;
    }
}