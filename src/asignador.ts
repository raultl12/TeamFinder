import {Usuario} from './usuario.ts'
import { Entrenamiento } from './entrenamiento.ts'
import { Nivel, TipoHabilidad } from './types.ts';

export class Asignador{
    private usuario: Usuario | null;
    private entrenamientos: Entrenamiento[];
    private filtroHabilidad: TipoHabilidad
    
}
