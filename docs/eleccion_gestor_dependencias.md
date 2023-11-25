# Elección del gestor de dependencias

## Opciones disponibles

## npm
Es el gestor predeterminado para Node.js. Es fácil de gestionar y tiene buen soporte. Aun así su seguridad es escasa y no tiene soporte nativo para TypeScript.

## Yarn
Es un gestor creado por facebook, más rápido y seguro que npm. Es simple y compatible con npm. Por el contrario, usa bastantes recursos y el instalador ocupa bastante espacio. 

## pnpm
Es similar a npm y yarn pero instala las dependencias de forma global y las enlaza para ahorrar espacio en disco. 

## Deno
Deno cuenta con su gestor de depenencias propio y permite tener todas las dependencias en un fichero .ts. Gracias a usar ECMAScript, podemos importar funcionalidad desde URLs sin tener que instalar las dependencias, además de ser más seguro. 

## Opción elegida
El gestor de dependencias elegido es Deno, ya que al haber sido seleccionado como runtime, es mas cómodo usarlo tambien como gestor de dependencias, además de que es más seguro y con soporte nativo para TS. Usando deno evitamos instalar otro gestor diferente ahorrando espacio en disco. 

**Elección: Deno**