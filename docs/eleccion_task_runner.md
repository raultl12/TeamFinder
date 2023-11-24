# Elección del task runner

## Opciones disponibles

### Deno task
Es especifico de deno. Las tareas se especifican dentro del fichero de configuracion de deno.json en el apartado tasks. Es similar a npm scripts. 

### Velociraptor
[Velociraptor](https://velociraptor.run/) es un task runner para [deno](https://deno.land/x/velociraptor@1.5.0) facil de usar. Las tareas se escriben en un archivo .ts. Permite ejecutar tareas basadas en el ciclo de vida del proyecto, es decir, antes de iniciarlo, y despues de iniciarlo. Su configuración no es compleja aunque permite configurar las tareas en varios tipos de formatos como .json, .ts, .js. 

## Decision de task runner
Para este proyecto usaremos velociraptor ya que las tareas pueden ser escritas directamente en TypeScript y además esta preparado para ser usado con Deno. 

**Elección: Velociraptor**