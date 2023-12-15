import {Usuario} from './usuario.ts'
import { Entrenamiento } from './entrenamiento.ts'
import { Actitud, Nivel, Rango, Rol, TipoHabilidad } from './types.ts';

export class Asignador{
    private usuario: Usuario | null;
    private entrenamientos: Entrenamiento[];
    private filtroHabilidad: TipoHabilidad;

    constructor(usuario: Usuario, entrenamientos: Entrenamiento[], filtroHabilidad: TipoHabilidad){
        this.usuario = usuario;
        this.entrenamientos = entrenamientos;
        this.filtroHabilidad = filtroHabilidad;
    }

    getEntrenamientos(): Entrenamiento[] {
        return this.entrenamientos;
    }

    setFiltroHabilidad(filtroHabilidad: TipoHabilidad): void {
        this.filtroHabilidad = filtroHabilidad;
    }

    filtrarEntrenamientos(rol: Rol, actitud: Actitud, rango: Rango, ratio: number): Entrenamiento[]{
        let entrenamientosFiltrados: Entrenamiento[] = 
            this.entrenamientos.filter(entrenamiento => entrenamiento.getTipoHabilidad() == this.filtroHabilidad);

        const nivelMap = [
            { min: 0.0, max: 0.5, nivel: Nivel.Muy_malo },
            { min: 0.5, max: 1.0, nivel: Nivel.Malo },
            { min: 1.0, max: 1.5, nivel: Nivel.Medio },
            { min: 1.5, max: 2.0, nivel: Nivel.Bueno },
            { min: 2.0, max: 2.5, nivel: Nivel.Muy_bueno },
            { min: 2.5, max: Infinity, nivel: Nivel.Excelente }
        ];
        
        const nivel = nivelMap.find(range => ratio >= range.min && ratio < range.max)?.nivel;
        
        if (nivel) {
            entrenamientosFiltrados = entrenamientosFiltrados.filter(entrenamiento => entrenamiento.getNivel() == nivel);
        }

        return entrenamientosFiltrados;
    }

    calcularDistancias(rol: Rol, actitud: Actitud, rango: Rango, entrenamientosFiltrados: Entrenamiento[]){
        let distancias: number[] = [];
        for (let entrenamiento of entrenamientosFiltrados) {
            let distancia = 0;
            distancia += Math.pow(rol - entrenamiento.getRol(), 2);
            distancia += Math.pow(actitud - entrenamiento.getActitud(), 2);
            distancia += Math.pow(rango - entrenamiento.getRango(), 2);
            distancias.push(distancia);
        }
        return distancias;
    }

    entrenamientoMasCercano(distancias: number[]): number{
        let min = distancias[0];
        let index = 0;
        for (let i = 1; i < distancias.length; i++) {
            if (distancias[i] < min) {
                min = distancias[i];
                index = i;
            }
        }
        return index;
    }


    asignarEntrenamiento(): Entrenamiento{
        if(this.entrenamientos.length == 0){
            throw new Error("No hay entrenamientos");
        }

        if(this.usuario == null){
            throw new Error("No hay usuario");
        }

        const [rol, actitud, rango, ratio] = [this.usuario?.getRol(), this.usuario?.getActitud(),
        this.usuario?.getRango(), this.usuario?.getRatio()];


        let entrenamientosFiltrados: Entrenamiento[] = this.filtrarEntrenamientos(rol, actitud, rango, ratio);

        let distancias: number[] = [];
        distancias = this.calcularDistancias(rol, actitud, rango, entrenamientosFiltrados);


        let index = this.entrenamientoMasCercano(distancias);

        return entrenamientosFiltrados[index];
    }
    
}
