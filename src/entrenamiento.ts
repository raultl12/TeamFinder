import {Rol, Actitud, Rango, TipoHabilidad, Nivel} from './types'

export class Entrenamiento{
    private rol: Rol;
    private actitud: Actitud;
    private rango: Rango;
    private tipoHabilidad: TipoHabilidad;
    private nivel: Nivel;

    //Getters de los campos
    public getRol(): Rol{
        return this.rol;
    }
    
    public getActitud(): Actitud{
        return this.actitud;
    }

    public getRango(): Rango{
        return this.rango;
    }

    public getTipoHabilidad(): TipoHabilidad{
        return this.tipoHabilidad;
    }

    public getNivel(): Nivel{
        return this.nivel;
    }
}