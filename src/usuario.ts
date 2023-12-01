import {Rol, Actitud, Rango} from './types.ts'

export class Usuario {
    private rol: Rol;
    private actitud: Actitud;
    private ratio: number;
    private rango: Rango;

    constructor(rol: Rol, actitud: Actitud, ratio: number, rango: Rango){
        this.rol = rol;
        this.actitud = actitud;
        this.ratio = ratio;
        this.rango = rango;
    }

    public getRol(): Rol{
        return this.rol;
    }
    public getActitud(): Actitud{
        return this.actitud;
    }
    public getRatio(): number{
        return this.ratio;
    }
    public getRango(): Rango{
        return this.rango;
    }
}