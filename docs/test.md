# Herramientas para tests
A la hora de escoger las herramientas para testing, debemos tener en cuenta lo siguiente:

## Criterios de elección
* El framework debe de soportar el lenguaje elegido para el proyecto(TypeScript)

* Tendrá prioridad el framework que integre CLI. 

* Tendrá prioridad al framework que ya integre bibliotecas de aserciones, para que no haya que instalar bibliotecas extra.

## Herramientas disponibles
* Deno testing: Esta herramienta ya viene instalada con el runtime del proyecto, por lo que no se deberia instalar ninguna biblioteca externa, además, cuenta con biblioteca de aserciones propia, por lo que no hay que instalarla, solo importarla. Ver [documentación](https://docs.deno.com/runtime/manual/basics/testing/)

* Mocha: Es un framework de testing para node.js pero que podemos usar con deno. No es necesario instalarlo solo importarlo. No dispone de biblioteca de aserciones, pero funciona muy bien con [Chai](https://www.chaijs.com/). El problema de Chai es que requiere de npm, por lo que podemos usar la biblioteca de aserciones de deno.Ver [Deno mocha](https://deno.land/x/deno_mocha@0.3.1) y [aserciones en deno](https://docs.deno.com/runtime/manual/basics/testing/assertions)

* Deno test suite: Es una extensión de deno testing que mejora la organización de test, asemejándose a Jasmine, Jest y Mocha. Ver [documentación](https://deno.land/x/test_suite@0.16.1).

* BDD Deno testing: Es una interfaz [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) para deno testing (comentado anteriormente). Cambia el formato de los test para que se asemejen a jasmine, Jest o Mocha. Ver [documentación](https://deno.land/std@0.204.0/testing/bdd.ts)

* Tincan: Es una libreria que permite escribir tests similares a Jest en Deno. Ver [documentación](https://deno.land/x/tincan@1.0.2)

## Conclusión
La herramienta elegida sera Deno Testing, pues ya viene integrado con Deno y dispone de biblioteca de asercionses y de CLI. 