// Clase Usuario

export enum Rol {
    Fragger,
    IGL,
    Support,
    Lurker,
    Awper,
  }

export enum Actitud {
    Agresivo,
    Controlador,
  }

export enum Rango {
    Plata,
    Oro,
    Ak,
    Maestro,
    EliteGlobal,
  }
  
export class Usuario {
    public rol: Rol;
    public actitud: Actitud;
    public ratio: number;
    public rango: Rango;
  }