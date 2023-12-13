# Herramientas para tests
A la hora de escoger las herramientas para testing, debemos tener en cuenta lo siguiente:

## Criterios de elección
* El framework debe de soportar el lenguaje elegido para el proyecto(TypeScript)

* Tendrá prioridad el framework que integre CLI. 

* Tendrá prioridad al framework que ya integre bibliotecas de aserciones, para que no haya que instalar bibliotecas extra.

## Herramientas disponibles
* Deno testing: Esta herramienta ya viene instalada con el runtime del proyecto, por lo que no se deberia instalar ninguna biblioteca externa, además, cuenta con biblioteca de aserciones propia, por lo que no hay que instalarla, solo importarla. Ver [documentación](https://docs.deno.com/runtime/manual/basics/testing/)

* Mocha: Es un framework de testing para node.js pero que podemos usar con deno. No es necesario instalarlo solo importarlo. No dispone de biblioteca de aserciones, pero funciona muy bien con [Chai](https://www.chaijs.com/). El problema de Chai es que requiere de npm, por lo que podemos usar la biblioteca de aserciones de deno.Ver [Deno mocha](https://deno.land/x/deno_mocha@0.3.1) y [aserciones en deno](https://docs.deno.com/runtime/manual/basics/testing/assertions)

## Conclusión
La herramienta elegida sera Deno Testing, pues ya viene integrado con Deno y dispone de biblioteca de asercionses y de CLI. 