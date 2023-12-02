// url_test.ts
// @ts-ignore
import { assertEquals } from "assertEquals";
import { Asignador } from "../src/asignador.ts";
import { Entrenamiento } from "../src/entrenamiento.ts";
import { Usuario } from "../src/usuario.ts";
import { Rol, Actitud, Rango, TipoHabilidad, Nivel } from "../src/types.ts";

// @ts-ignore
Deno.test("Test de asignación 1", () => {

  let asignador = new Asignador();

  asignador.setFiltroHabilidad(TipoHabilidad.Posicionamiento);

  let usuario = new Usuario(Rol.Awper, Actitud.Agresivo, 1.3, Rango.Maestro);

  let entrenamiento1 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Medio);
  let entrenamiento2 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Apoyo, Nivel.Muy_bueno);
  let entrenamiento3 = new Entrenamiento(Rol.Fragger, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Apoyo, Nivel.Muy_bueno);
  let entrenamiento4 = new Entrenamiento(Rol.IGL, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Muy_bueno);
  let entrenamiento5 = new Entrenamiento(Rol.Lurker, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Apoyo, Nivel.Muy_bueno);
  let entrenamiento6 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Muy_bueno);
  let entrenamiento7 = new Entrenamiento(Rol.Support, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Rotaciones, Nivel.Muy_bueno);

  asignador.setUsuario(usuario);

  asignador.aniadirEntrenamiento(entrenamiento1);
  asignador.aniadirEntrenamiento(entrenamiento2);
  asignador.aniadirEntrenamiento(entrenamiento3);
  asignador.aniadirEntrenamiento(entrenamiento4);
  asignador.aniadirEntrenamiento(entrenamiento5);
  asignador.aniadirEntrenamiento(entrenamiento6);
  asignador.aniadirEntrenamiento(entrenamiento7);

  assertEquals(asignador.asignarEntrenamiento(), entrenamiento1);
});

// @ts-ignore
Deno.test("Test de asignación 2", () => {

  let asignador = new Asignador();

  asignador.setFiltroHabilidad(TipoHabilidad.Rotaciones);

  let usuario = new Usuario(Rol.Fragger, Actitud.Controlador, 3, Rango.Maestro);

  let entrenamiento1 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Medio);
  let entrenamiento2 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Apoyo, Nivel.Muy_bueno);
  let entrenamiento3 = new Entrenamiento(Rol.Fragger, Actitud.Controlador, Rango.Maestro, TipoHabilidad.Rotaciones, Nivel.Excelente);
  let entrenamiento4 = new Entrenamiento(Rol.IGL, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Muy_bueno);
  let entrenamiento5 = new Entrenamiento(Rol.Lurker, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Apoyo, Nivel.Muy_bueno);
  let entrenamiento6 = new Entrenamiento(Rol.Awper, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Posicionamiento, Nivel.Muy_bueno);
  let entrenamiento7 = new Entrenamiento(Rol.Support, Actitud.Agresivo, Rango.Maestro, TipoHabilidad.Rotaciones, Nivel.Muy_bueno);

  asignador.setUsuario(usuario);

  asignador.aniadirEntrenamiento(entrenamiento1);
  asignador.aniadirEntrenamiento(entrenamiento2);
  asignador.aniadirEntrenamiento(entrenamiento3);
  asignador.aniadirEntrenamiento(entrenamiento4);
  asignador.aniadirEntrenamiento(entrenamiento5);
  asignador.aniadirEntrenamiento(entrenamiento6);
  asignador.aniadirEntrenamiento(entrenamiento7);

  assertEquals(asignador.asignarEntrenamiento(), entrenamiento3);
});