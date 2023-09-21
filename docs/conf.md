# Configuración del repositorio

Para la correcta configuración del repositorio, se deben crear claves pública y privada(ya no se permite el uso de http).

Para crear estas claves y añadir la clave publica a github podemos seguir el [tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) oficial de github.

Resumiendo, el comando que genera las claves es el siguiente:

```
$ ssh-keygen -t ed25519 -C "raultl6212@gmail.com"
```

## Configuración de Git

Antes de poder usar github, debemos instalar y configurar git en nuestro ordenador.

Estando en un sistema Linux, podemos usar el sigueinte comando para instalarlo:

```
$ sudo apt install git
```

Una vez instalado, configuramos nuestro usuario y correo. Se recomienda que coincidan con el usuario y correo de github. 

```
$ git config user.name "raultl12"
$ git config user.email "raultl6212@gmail.com"
```
