"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
const utiles_1 = require("../utiles/utiles");
class Direccion {
    constructor(calle, numero, piso, letra, cp, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.cp = cp;
        this.poblacion = poblacion;
        this.provincia = provincia;
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.cp = cp;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    direccionCompleta() {
        console.log("\n# Direccion completa");
        utiles_1.consoleColor("Dirección", `${this.calle}, ${this.numero} - ${this.piso} ${this.letra}`);
        utiles_1.consoleColor("C.P.", this.cp);
        utiles_1.consoleColor("Población", this.poblacion);
        utiles_1.consoleColor("Provincia", this.provincia);
    }
}
exports.Direccion = Direccion;
