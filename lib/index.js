"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//cspell: disable
const socket_io_1 = require("socket.io");
let onlineSesion = [];
/**Class Session */
class Sessiones {
    constructor() {
        /**Setup
         * @class Session - Clase para manejar las sesiones
         * @method setup - Metodo para configurar las rutas de la clase
         * @param app instancia de express obligatorio
         * @param server instancia del server levantado en http (opcional) solo si desea usar socket.io
         */
        this.setup = (app, server = undefined) => {
            const io = server ? new socket_io_1.Server(server) : undefined;
            app
                .get("/sessions", (req, res) => {
                if (io)
                    io.emit("session-online", onlineSesion);
                res.json({ onlineSesion, count: onlineSesion.length });
            })
                .post("/login/session", (req, res) => {
                const sessionId = Date.now().toString();
                onlineSesion.push(sessionId);
                if (io)
                    io.emit("session-online", onlineSesion);
                res.json({ sessionId });
            })
                .delete("/sessions", (req, res) => {
                onlineSesion = [];
                res.json(onlineSesion);
            })
                .delete("/sessions/:id", (req, res) => {
                const id = req.params.id;
                onlineSesion = onlineSesion.filter((session) => session.id !== id);
                if (io)
                    io.emit("session-online", onlineSesion);
                res.json({ id });
            })
                .put("/sessions/:id", (req, res) => {
                const id = req.params.id;
                onlineSesion = onlineSesion.map((session) => {
                    if (session.id === id) {
                        return session;
                    }
                    return session;
                });
                if (io)
                    io.emit("session-online", onlineSesion);
                res.json(onlineSesion);
            });
        };
    }
}
module.exports = { sessionOnline: new Sessiones() };
