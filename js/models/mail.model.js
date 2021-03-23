"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
const utiles_1 = require("../utiles/utiles");
class Mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
        this.tipo = tipo;
        this.direccion = direccion;
    }
    info() {
        console.log("\n# Correo");
        utiles_1.consoleColor("Tipo", this.tipo);
        utiles_1.consoleColor("Dirección", this.direccion);
    }
}
exports.Mail = Mail;
