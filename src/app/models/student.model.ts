export class Student {
    id: number;
    firstName: string;
    lasName: string;
    createdAt: Date;
    nota: number;

    constructor(
        id: number,
        firstName: string,
        lasName: string,
        createdAt: Date,
        nota: number,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lasName = lasName;
        this.createdAt = createdAt;
        this.nota = nota;
    }
}


