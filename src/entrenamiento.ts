import {Rol, Actitud, Rango, TipoHabilidad, Nivel} from './types.ts'

export class Entrenamiento{
    private _rol: Rol;
    private _actitud: Actitud;
    private _rango: Rango;
    private _tipoHabilidad: TipoHabilidad;
    private _nivel: Nivel;

    constructor(rol: Rol, actitud: Actitud, rango: Rango, tipoHabilidad: TipoHabilidad, nivel: Nivel){
        this._rol = rol;
        this._actitud = actitud;
        this._rango = rango;
        this._tipoHabilidad = tipoHabilidad;
        this._nivel = nivel;
    }

    //Getters de los campos
    public getRol(): Rol{
        return this._rol;
    }
    
    public getActitud(): Actitud{
        return this._actitud;
    }

    public getRango(): Rango{
        return this._rango;
    }

    public getTipoHabilidad(): TipoHabilidad{
        return this._tipoHabilidad;
    }

    public getNivel(): Nivel{
        return this._nivel;
    }
}