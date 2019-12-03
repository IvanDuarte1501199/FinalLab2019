export class profesor {
    id: number = 0;
    dni: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;

    constructor(dni: number, nombre: string, apellido: string, fechaNacimiento: Date) {
        this.id = this.id++;
        this.dni = dni;
        this.nombre = nombre; 
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }

}