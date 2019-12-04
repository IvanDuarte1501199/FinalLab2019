export class curso_alumno {
    id: number;
    cursoId: number;
    alumnoId: number;

    constructor(cursoId: number, alumnoId:number) {
        this.id = this.id++;
        this.cursoId = cursoId;
        this.alumnoId = alumnoId;
    }
}