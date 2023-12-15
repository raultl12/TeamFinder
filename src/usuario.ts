import {Rol, Actitud, Rango} from './types.ts'

export class Usuario {
    private _rol: Rol;
    private _actitud: Actitud;
    private _ratio: number;
    private _rango: Rango;

    constructor(rol: Rol, actitud: Actitud, ratio: number, rango: Rango){
        this._rol = rol;
        this._actitud = actitud;
        this._ratio = ratio;
        this._rango = rango;
    }

    public getRol(): Rol{
        return this._rol;
    }
    public getActitud(): Actitud{
        return this._actitud;
    }
    public getRatio(): number{
        return this._ratio;
    }
    public getRango(): Rango{
        return this._rango;
    }
}