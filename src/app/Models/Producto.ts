import { Persona } from "./Persona";

export class Producto {
    id!:number;
    nombre!:String;
    descripcion!:String;
    imagen!:String;
    precio!:String;
    cantidad!:String;
    persona!:Persona;

    constructor(nombre: String, descrpcion: String,imagen:String,precio:String,cantidad:String,persona:Persona) {

        this.nombre = nombre;
        this.descripcion = descrpcion;
        this.imagen=imagen;
        this.precio=precio;
        this.cantidad=cantidad;
        this.persona=persona;


    }
}
 