export class alumno {
    dni: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;

    constructor(dni: number, nombre: string, apellido: string, fechaNacimiento) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}