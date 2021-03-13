# IMPORTANTE

## Instalar dependencias principales

Para poder ejecutar todo el proyecto en sí, debemos instalar todas las dependencias que hacen falta para Loopback y React.

Vamos a hacer lo siguiente:
En una terminal (cmd, powershell, etc) nos posicionamos en el directorio de nuestro repositorio, es decir nos colocamos dentro de la carpeta ProyectoLb4React (ejemplo: C:\Users\anonimo\Desktop\ProyectoLb4React), y una vez dentro escribimos:

```sh
npm install
```

Ejemplo de como se vería en CMD:
```sh
C:\Users\anonimo\Desktop\ProyectoLb4React>npm install
```

Esperamos un rato y con esto se instalarán todas las dependencias correspondientes a Loopback.

Luego, abrimos otra terminal y nos posicionamos en el directorio de nuestra App React, que en este caso se llama 'client_src' (ejemplo: C:\Users\anonimo\Desktop\ProyectoLb4React\client_src), y una vez dentro escribimos:

```sh
npm install
```

Ejemplo de como se vería en CMD:
```sh
C:\Users\anonimo\Desktop\ProyectoLb4React\client_src>npm install
```

Con esto se instalarán todas las dependencias correspondientes a React.


## Instalar otras dependencias usadas en el proyecto

(**OJO**: Puede que los paquetes que se mencionen a continuación ya los posea instalados, y si ese es el caso pasar directamente a la **Ejecución entera del proyecto**.)

Todas las dependencias que se indicarán a continuación se deben instalar en una terminal donde nos encontremos posicionados en el directorio de React, es decir en \client_src.

### Dependencias a instalar

axios: nos permite realizar HTTP Request a API's REST
```sh
npm install axios --save
```

react-router-dom: nos permite realizar el routeo entre componentes (páginas)
```sh
npm install --save react-router react-router-dom
```

bootstrap: para darle estilos a los componentes
```sh
npm install react-bootstrap bootstrap
```

Y para poder utilizar bootstrap en algun componente, importamos la librería de bootstrap dentro de dicho componente con la siguiente línea de código:
```sh
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Ejecución entera del proyecto

Ahora sí, ya podemos ejecutar ambas App's en diferentes terminales (una terminal donde nos posicionemos en ProyectoLb4React y otra en client_src), escribiendo:
```sh
npm start
```

Ejemplo de ejecución en dos CMD diferentes:
```sh
C:\Users\anonimo\Desktop\ProyectoLb4React>npm start
```

```sh
C:\Users\anonimo\Desktop\ProyectoLb4React\client_src>npm start
```

Con esto ya tendríamos corriendo Loopback en un puerto (3000) y React en otro puerto (3001).

(Loopback y React se levantan en el mismo puerto, el 3000, por ende se cambió el puerto de React al 3001 modificando una línea de código en el archivo package.json de React)

### Datasource: MySql
