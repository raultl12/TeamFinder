import {Rol, Actitud, Rango} from './types'

export class Usuario {
    private rol: Rol;
    private actitud: Actitud;
    private ratio: number;
    private rango: Rango;

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