# Elección de runtime

La elección del runtime se hará en base a los criterios establecidos en el archivo de 
[criterios de elección](./criterios_eleccion_herramientas.md).

## Opciones disponibles

### Node.js
Es la opción mas popular y permite la ejecución asíncrona de javascript. No establece grandes criterios de seguridad y para ejecutar TypeScript debemos compilar previamente el código TypeScript a JavaScript. Es gratuito y open source. Importa modulos mediante CommonJS, lo que obliga a descargar/instalar dichos módulos antes de usarlos. 

### Deno
Cuenta con soporte nativo para TypeScript sin necesidad de compilar a JavaScript y herramientas propias como lintern y test runner. Además, también mejora la velocidad de ejecución frente a Node.js. Al igual que Node.js, es gratuito y de código abierto. En cuanto a los módulo, se importan median ECMAScript, lo que significa que no hay que descargarlos y pueden ser importados mediante URLs. 

### Bun
Bun es un nuevo runtime para JavaScript, centrado en la velocidad de ejecución. También cuenta con sus propias herramientas como test runner y package manager. No tiene soporte nativo para TypeScript. Bun es el mas reciente de las 3 opciones y se actualiza constantemente. 

## Decisión de runtime

**El runtime elegido es Deno**, ya que es el que más [criterios de elección](./criterios_eleccion_herramientas.md) cumple. El hecho de que Deno tenga soporte nativo para TypeScript es fundamental, además de que está centrado en la seguridad. Node.js ha sido descartado por la necesidad de compilar el codigo a JavaScript, y ya que Deno se centra en mejorar Node, es mejor opción. Bun ha sido descartado por no destacar en aspectos de seguridad, ademas de tampoco tener soporte nativo para TypeScript. 

**Elección: Deno**