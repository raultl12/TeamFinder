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
export class Usuario {
    public rol: Rol;
    public actitud: Actitud;
    public ratio: number;
    public rango: ;
  
    constructor(rol: Rol, actitud: Actitud, ratio: , rango: ) {
      this.rol = rol;
      this.actitud = actitud;
      this.ratio = ratio;
      this.rango = rango;
    }
  }