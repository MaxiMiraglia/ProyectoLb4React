# IMPORTANTE

## Instalar dependencias

Para poder ejecutar todo el proyecto en sí, debemos instalar todas las dependencias que hacen falta para Loopback y React.

Vamos a hacer lo siguiente:
En una terminal (cmd, powershell, etc) nos posicionamos en el directorio de nuestro repositorio, es decir nos colocamos dentro de la carpeta LoopbackReact (ejemplo: C:\Users\anonimo\Desktop\LoopbackReact), y una vez dentro escribimos:

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

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
