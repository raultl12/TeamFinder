// url_test.ts
// @ts-ignore
import { assertEquals, assertNotEquals, assertArrayIncludes } from "assertEquals";
import { Asignador } from "../src/asignador.ts";
import { Entrenamiento } from "../src/entrenamiento.ts";
import { Usuario } from "../src/usuario.ts";
import { Rol, Actitud, Rango, TipoHabilidad, Nivel } from "../src/types.ts";

let entrenamiento1 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Medio);
let entrenamiento2 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Apoyo, Nivel.Muy_bueno);
let entrenamiento3 = new Entrenamiento(Rol.Fragger, Actitud.Controlador, Rango.Maestro, TipoHabilidad.Rotaciones, Nivel.Excelente);
let entrenamiento4 = new Entrenamiento(Rol.IGL, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Muy_bueno);
let entrenamiento5 = new Entrenamiento(Rol.Lurker, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Apoyo, Nivel.Muy_bueno);
let entrenamiento6 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Muy_bueno);
let entrenamiento7 = new Entrenamiento(Rol.Support, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Rotaciones, Nivel.Muy_bueno);

let entrenamientos = [entrenamiento1, entrenamiento2, entrenamiento3,
  entrenamiento4, entrenamiento5, entrenamiento6, entrenamiento7];

const EntrenamientosMasCoincidencias = (usuario: Usuario, entrenamientos: Entrenamiento[]) => {
  const entrenamientosMasCoincidencias: Entrenamiento[] = entrenamientos.filter((entrenamiento) => {
    // Filtra los entrenamientos que coincidan con los filtros de rol, actitud y rango del usuario
    return (
      entrenamiento.rol === usuario.rol &&
      entrenamiento.actitud === usuario.actitud &&
      entrenamiento.rango === usuario.rango
    );
  });

  return entrenamientosMasCoincidencias;
}

// @ts-ignore
Deno.test("Test de asignación 1", () => {


  let usuario = new Usuario(Rol.Awper, Actitud.Agresivo, 1.3, Rango.Maestro);

  let asignador = new Asignador(usuario, entrenamientos, TipoHabilidad.Posicionamiento);
  
  assertArrayIncludes(EntrenamientosMasCoincidencias(usuario, entrenamientos), [asignador.asignarEntrenamiento()]);
});

// @ts-ignore
Deno.test("Test de asignación 2", () => {
  let usuario = new Usuario(Rol.Fragger, Actitud.Controlador, 3, Rango.Maestro);

  let asignador = new Asignador(usuario, entrenamientos, TipoHabilidad.Rotaciones);

  assertArrayIncludes(EntrenamientosMasCoincidencias(usuario, entrenamientos), [asignador.asignarEntrenamiento()]);
});

// @ts-ignore
Deno.test("Comparacion: Entrenamiento aleatorio", () => {
  let usuario = new Usuario(Rol.Support, Actitud.Controlador, 1.3, Rango.Maestro);

  let asignador = new Asignador(usuario, entrenamientos, TipoHabilidad.Apoyo); 
  // Obtener un entrenamiento aleatorio
  const numeroAleatorio = Math.floor(Math.random() * 7);
  let entrenamientoAleatorio = asignador.entrenamientos[numeroAleatorio];

  assertNotEquals(EntrenamientosMasCoincidencias(usuario, entrenamientos)[0], entrenamientoAleatorio);
});