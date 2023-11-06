// Clase Usuario

export enum Rol {
    Fragger = "Fragger",
    IGL = "IGL",
    Support = "Support",
    Lurker = "Lurker",
    Awper = "Awper",
  }
export class Usuario {
    public rol: Rol;
    public actitud: ;
    public ratio: ;
    public rango: ;
  
    constructor(rol: Rol, actitud: , ratio: , rango: ) {
      this.rol = rol;
      this.actitud = actitud;
      this.ratio = ratio;
      this.rango = rango;
    }
  }