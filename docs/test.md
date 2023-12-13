# Herramientas para tests
A la hora de escoger las herramientas para testing, debemos tener en cuenta lo siguiente:

## Criterios de elección
* El framework debe de soportar el lenguaje elegido para el proyecto(TypeScript)

* Tendrá prioridad el framework que integre CLI. 

* Tendrá prioridad al framework que ya integre bibliotecas de aserciones, para que no haya que instalar bibliotecas extra.

## Herramientas disponibles
* Deno testing: Esta herramienta ya viene instalada con el runtime del proyecto, por lo que no se deberia instalar ninguna biblioteca externa, además, cuenta con biblioteca de aserciones propia, por lo que no hay que instalarla, solo importarla. 

* Deno jest: Es la versión de jest para Deno, es más fácil de usar que Oak ya que no es necesario crear Mocks, pero requiere de un archivo de configuración algo complejo.

## Conclusión
La herramienta elegida sera Deno Testing, pues ya viene integrado con Deno y dispone de biblioteca de asercionses y de CLI. 