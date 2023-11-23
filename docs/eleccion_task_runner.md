# Elección del task runner

## Opciones disponibles

### npm scripts
Es el más usado con Node.js. Las tareas se escriben en la seccion scripts dentro del package.json. 

### Gulp
Es en task runner independiente en el que las tareas se escriben en un fichero .js. Se pueden incluir plugins externos. Utiliza node, por lo que hay que instalarlo. En Snyk Advisor no tiene una puntuación muy elevada(79/100).

### Grunt
Grunt es muy similar a gulp y esta basado en Node.js. Las tareas también se escriben en un fichero .js. 

### Deno task
Es especifico de deno. Las tareas se especifican dentro del fichero de configuracion de deno.json en el apartado tasks. Es similar a npm scripts. 

### Velociraptor
Es un task runner para deno facil de usar. Las tareas se escriben en un archivo .ts. Permite ejecutar tareas basadas en el ciclo de vida del proyecto, es decir, antes de iniciarlo, y despues de iniciarlo. Su configuración no es compleja aunque permite configurar las tareas en varios tipos de formatos como .json, .ts, .js. 

## Decision de task runner
Teniendo en cuenta que el runtime elegido es Deno y que el proyecto usa TypeScript, las mejores opciones de task runner son Deno task y velociraptor. Para este proyecto usaremos velociraptor ya que las tareas pueden ser escritas directamente en TypeScript y además esta preparado para ser usado con Deno. 

**Elección: Velociraptor**