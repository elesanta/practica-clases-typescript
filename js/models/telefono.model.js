"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
const utiles_1 = require("../utiles/utiles");
class Telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
        this.tipo = tipo;
        this.numero = numero;
    }
    info() {
        console.log("\n# Teléfono");
        utiles_1.consoleColor("Tipo", this.tipo);
        utiles_1.consoleColor("Número", this.numero);
    }
}
exports.Telefono = Telefono;
