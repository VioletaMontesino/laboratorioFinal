export class User {
    _id?: number;
    Nombre: string;
    Apellidos: string;
    Edad: string;
    Dni: string;
    Cumpleanos: Date;
    ColorFav: string;
    Sexo: Sexo;

    constructor(Nombre:string,Apellidos:string,Edad:string,Dni:string,Cumpleanos:Date,ColorFav:string,Sexo:Sexo) {
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Edad = Edad;
        this.Dni = Dni;
        this.Cumpleanos = Cumpleanos;
        this.ColorFav = ColorFav;
        this.Sexo = Sexo;
	}

}


export interface Sexo {
    id: number;
    name: string;
}
