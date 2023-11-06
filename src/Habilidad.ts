// Clase Habilidad

export enum TipoHabilidad {
    Posicionamiento = "Posicionamiento",
    Rotaciones = "Rotaciones",
    Apoyo = "Apoyo",
  }

export enum Nivel {
    Muy_malo = "Muy malo",
    Malo = "Malo",
    Medio = "Medio",
    Bueno = "Bueno",
    Muy_bueno = "Muy bueno",
    Excelente = "Excelente",
}
export class Habilidad {
    public tipo: TipoHabilidad;
    public nivel: Nivel;
  
    constructor(tipo: TipoHabilidad, nivel: Nivel) {
      this.tipo = tipo;
      this.nivel = nivel;
    }
  }