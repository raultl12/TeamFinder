// Clase Habilidad

export enum TipoHabilidad {
    Posicionamiento = "Posicionamiento",
    Rotaciones = "Rotaciones",
    Apoyo = "Apoyo",
  }
export class Habilidad {
    public tipo: TipoHabilidad;
    public nivel: ;
  
    constructor(tipo: TipoHabilidad, nivel: ) {
      this.tipo = tipo;
      this.nivel = nivel;
    }
  }