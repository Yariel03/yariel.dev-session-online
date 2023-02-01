# Colores en consola

El proyecto tiene como fin ver los usuarios en linea de nuestras app
este proyecto es una libreria para node.js
podemos usar la modalidad en tiempo real si conoces acerca de sockets.io

```sh

- # Los colores que existen son :

-   Red: "\x1b[31m%s\x1b[0m",
-   Green: "\x1b[32m%s\x1b[0m",
-   Yellow: "\x1b[33m%s\x1b[0m",
-   Blue: "\x1b[34m%s\x1b[0m",
-   Magenta: "\x1b[35m%s\x1b[0m",
-   Cyan: "\x1b[36m%s\x1b[0m",
-   White: "\x1b[37m%s\x1b[0m",
-   Black: "\x1b[30m%s\x1b[0m",
-   Gray: "\x1b[90m%s\x1b[0m",
-   RedBg: "\x1b[41m%s\x1b[0m",
-   GreenBg: "\x1b[42m%s\x1b[0m",
-   YellowBg: "\x1b[43m%s\x1b[0m",
-   BlueBg: "\x1b[44m%s\x1b[0m"


```

# Uso

si desea probar puede realizarlo asi:

```js
const { consoleLog, Color } = require("yariel.dev-colors");
consoleLog(Color.Yellow, "Hello World");
```

# Autor

Yariel Baldeon

- [Linkedin](https://www.linkedin.com/in/alexander-baldeon-586533160/)
- [alex-003.net@live.com](mailto:alex-003.net@live.com)
