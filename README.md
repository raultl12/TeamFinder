# TeamFinder
## Problema

Los jugadores de counter-strike no encuentran ejercicios personalizados para mejorar sus habilidades dentro del juego.

## Documentación
[Configuración de github](./docs/conf.md)

[Historias de Usuarios](./docs/historiasUsuario.md)

[Milestones](./docs/milestones.md)

[Personas](./docs/user-journey.md)

[Test](./docs/test.md)

## Herramientas para la automatización de operaciones
Las herramientas seleccionadas para este proyecto se indican en [este archivo](./docs/herramientas_seleccionadas.md). 

Para ver la discusión de selección de cada herramienta puede ver los siguientes archivos:
* [Runtime](./docs/eleccion_runtime.md)
* [Gestor de dependencias](./docs/eleccion_gestor_dependencias.md)
* [Task runner](./docs/eleccion_task_runner.md)

## Clase Asignador
Esta clase es la clase principal donde se implementará la lógica de negocio.

## Comprobación de sintaxis
Para comprobar la sintaxis de nuestro proyecto se ha establecido una tarea en el [archivo de configuración de velociraptor](./velociraptor.ts) que se encarga de comprobar la sintaxis del archivo Usuario.ts. Para ello se debe ejecutar la siguiente orden

```bash
vr run check
```

## Tests
Puede encontrar la elección de herramientas para testing [aquí](./docs/test.md)

Para ejecutar los test:

```bash
vr run test
```