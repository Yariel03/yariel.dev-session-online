# Ver usuarios activos en nuestra app

Libreria para saber cuantos usuarios estan en linea, se puede usar socket io para tiempo real o solo con peticiones

# Uso

si desea probar puede realizarlo asi:

```js
//import
const { sessionOnline } = require("yariel.dev-session-online");

//config only request
sessionOnline.setup(app);

//or socket.io
sessionOnline.setup(app, server);
```

## Autor

Yariel Baldeon

- [Linkedin](https://www.linkedin.com/in/alexander-baldeon-586533160/)
- [alex-003.net@live.com](mailto:alex-003.net@live.com)
