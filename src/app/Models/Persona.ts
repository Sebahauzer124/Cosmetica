export class Persona {
    id!: number;
    nombre: String;
    apellido: String;
    dni:String;
    direccion:String;
    nacionalidad:String;
    provincia:String;
    localidad:String;



    constructor(nombre: String, apellido: String,dni:String,direccion:String,nacionalidad:String,provincia:String,localidad:String) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni=dni;
        this.direccion=direccion;
        this.nacionalidad=nacionalidad;
        this.provincia=provincia;
        this.localidad=localidad;

    }
}
