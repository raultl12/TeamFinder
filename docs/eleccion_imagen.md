# Imagen para el contenedor de pruebas
Para seleccionar una imagen debemos tener en cuenta lo siguiente:

* Como estamos usando Deno, es preferible pero no necesario que la imagen tenga Deno instalada.
* Debe de ser ligera y rápida.
* Se tendrán en cuenta las imagenes de SOs (Ubuntu, Debian, Alpine, etc)

# Imagenes candidatas

* [denoland/deno](https://hub.docker.com/r/denoland/deno). Es la imagen oficial de deno para docker. 
* [Baleyko/deno](https://hub.docker.com/r/baleyko/deno). Es una imagen no oficial que contiene ubuntu focal con deno ya instalado. 
* [Ubuntu](https://hub.docker.com/_/ubuntu). Imagen oficial de Ubuntu. No trae nada instalado por lo que hay que instalar Deno y TypeScript.
* [Alpine](https://hub.docker.com/_/alpine). Imagen oficial de Alpine, es muy ligera y rápida, pero hay que instalar Deno y TypeScript. 
* [Hayd](https://hub.docker.com/r/hayd/deno). Era una imagen extraoficial pero que ahora se ha unido a las oficiales de Deno. 
* [runcitadel](https://hub.docker.com/r/runcitadel/deno). Solo especifica que está basada en debian. Tiene deno instalado. 
# Elección
Entre las opciones, se ha seleccionado a Baleyko/deno, ya parte de un ubuntu base en el que instala deno y nada mas, lo que la convierte en una imagen bastante ligera.