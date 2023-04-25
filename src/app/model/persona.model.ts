export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    descripcion: string;
    acercaDe: string;

    constructor(nombre: string, apellido: string, img: string, descripcion: string, acercaDe: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.acercaDe = acercaDe;
    }
}