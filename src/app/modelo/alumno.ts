export class alumno {
    dni: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;

    constructor(dni: number, nombre: string, apellido: string, fechaNacimiento: Date) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}