// Clase Usuario

export enum Rol {
    Fragger = "Fragger",
    IGL = "IGL",
    Support = "Support",
    Lurker = "Lurker",
    Awper = "Awper",
  }

export enum Actitud {
    Agresivo = "Agresivo",
    Controlador = "Controlador",
  }

export enum Rango {
    Plata = "Plata",
    Oro = "Oro",
    Ak = "Ak",
    Maestro = "Maestro",
    EliteGlobal = "Elite Global",
  }
  
export class Usuario {
    public rol: Rol;
    public actitud: Actitud;
    public ratio: number;
    public rango: Rango;
  
    constructor(rol: Rol, actitud: Actitud, ratio: number, rango: Rango) {
      this.rol = rol;
      this.actitud = actitud;
      this.ratio = ratio;
      this.rango = rango;
    }
  }