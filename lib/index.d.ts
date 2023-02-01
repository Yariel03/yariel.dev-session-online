/**Class Session */
declare class Session {
    /**Setup
     * @class Session - Clase para manejar las sesiones
     * @method setup - Metodo para configurar las rutas de la clase
     * @param app instancia de express obligatorio
     * @param server instancia del server levantado en http (opcional) solo si desea usar socket.io
     */
    setup: (app: any, server?: undefined) => void;
}
declare const _default: {
    session: Session;
};
export default _default;
