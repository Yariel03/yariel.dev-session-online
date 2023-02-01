//cspell: disable
import { Server } from "socket.io";
let onlineSesion: string[] = [];
/**Class Session */
class Session {
  /**Setup
   * @class Session - Clase para manejar las sesiones
   * @method setup - Metodo para configurar las rutas de la clase
   * @param app instancia de express obligatorio
   * @param server instancia del server levantado en http (opcional) solo si desea usar socket.io
   */
  setup = (app: any, server = undefined) => {
    const io = server ? new Server(server) : undefined;

    app
      .get("/sessions", (req: any, res: any) => {
        if (io) io.emit("session-online", onlineSesion);
        res.json({ onlineSesion, count: onlineSesion.length });
      })
      .post("/login/session", (req: any, res: any) => {
        const sessionId: string = Date.now().toString();
        onlineSesion.push(sessionId);
        if (io) io.emit("session-online", onlineSesion);
        res.json({ sessionId });
      })
      .delete("/sessions", (req: any, res: any) => {
        onlineSesion = [];
        res.json(onlineSesion);
      })
      .delete("/sessions/:id", (req: any, res: any) => {
        const id = req.params.id;
        onlineSesion = onlineSesion.filter((session: any) => session.id !== id);
        if (io) io.emit("session-online", onlineSesion);
        res.json({ id });
      })
      .put("/sessions/:id", (req: any, res: any) => {
        const id = req.params.id;
        onlineSesion = onlineSesion.map((session: any) => {
          if (session.id === id) {
            return session;
          }
          return session;
        });
        if (io) io.emit("session-online", onlineSesion);
        res.json(onlineSesion);
      });
  };
}

module.exports = { sessionOnline: new Session() };
