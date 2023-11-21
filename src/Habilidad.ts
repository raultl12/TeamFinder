// Clase Habilidad

export enum TipoHabilidad {
    Posicionamiento,
    Rotaciones,
    Apoyo,
  }

export enum Nivel {
    Muy_malo,
    Malo,
    Medio,
    Bueno,
    Muy_bueno,
    Excelente,
}
export class Habilidad {
    public tipo: TipoHabilidad;
    public nivel: Nivel;
  
    constructor(tipo: TipoHabilidad, nivel: Nivel) {
      this.tipo = tipo;
      this.nivel = nivel;
    }
  }