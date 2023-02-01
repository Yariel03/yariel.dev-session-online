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

--------------------------------------------------------
//una vez ya configurado puede usar las siguientes rutas
GET http://localhost:3000/sessions
//Le devuelve todos los clientes y el numero total que se han conectado
{
  "onlineSesion": [],
  "count": 0
}

// Es la ruta que va sumando las sesiones
 POST http://localhost:3000/login/session
 devuelve el id random del usuario logueado
{
  "sessionId": "1675281609919"
}

//Elimina la session del cliente y actualiza el numero en linea
 DELETE http://localhost:3000/sessions/:id

 //Elimina todas las sesiones en linea
 DELETE http://localhost:3000/sessions/

 -----------------------------------------
  Si va a usar sesiones con socket en su cliente debe uinstalar alguna libreria de socket y el evento emitido que brinda la lib es el siguiente
                    io.emit("session-online", onlineSesion);
  donde onlineSession es un array de todos los usuaios en linea


```

# Ejemplo para configurar en el servidor solo con peticiones

```js
const express = require("express");
const { sessionOnline } = require("yariel.dev-session-online");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

sessionOnline.setup(app);
```

# Ejemplo con socket

```js
const express = require("express");
const { sessionOnline } = require("yariel.dev-session-online");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const server = app.listen(3000);

sessionOnline.setup(app, server);
```

## Autor

Yariel Baldeon

- [Linkedin](https://www.linkedin.com/in/alexander-baldeon-586533160/)
- [alex-003.net@live.com](mailto:alex-003.net@live.com)
