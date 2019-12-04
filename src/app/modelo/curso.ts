export class curso {
    id: number = 0;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    profesorId: number;
    profesorauxId: number;

    constructor(nombre: string, fechaInicio: Date, fechaFin: Date, profesorId: number,profesorauxId: number) {
        this.id = this.id++;
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.profesorId = profesorId;
        this.profesorauxId = profesorauxId;
    }
}