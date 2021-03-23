"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const utiles_1 = require("../utiles/utiles");
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, correos, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.correos = correos;
        this.telefonos = telefonos;
        this.notas = notas;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.correos = correos;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    get nombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
    }
    mostrarCorreos() {
        console.log("\n# Registro de correos");
        console.table(this.correos);
    }
    addCorreo(correo) {
        this.correos.push(correo);
    }
    mostrarTelefonos() {
        console.log("\n# Registro de teléfonos");
        console.table(this.telefonos);
    }
    addTelefono(telefono) {
        this.telefonos.push(telefono);
    }
    mostrarDirecciones() {
        console.log("\n# Registro de direcciones");
        console.table(this.direcciones);
    }
    addDireccion(direccion) {
        this.direcciones.push(direccion);
    }
    mostrarNotas() {
        console.log("\n# Registro de notas");
        console.table(this.notas);
    }
    addNotas(notas) {
        this.notas.push(notas);
    }
    mostrarInformacion() {
        console.log("\n# Info de contacto", "#".repeat(60), "\n");
        utiles_1.consoleColor("Nombre completo", this.nombreCompleto);
        utiles_1.consoleColor("Edad", this.edad);
        utiles_1.consoleColor("DNI", this.dni);
        utiles_1.consoleColor("Cumpleaños", this.cumpleanos);
        utiles_1.consoleColor("Color favorito", this.colorFavorito);
        utiles_1.consoleColor("Sexo", this.sexo);
        this.mostrarCorreos();
        this.mostrarDirecciones();
        this.mostrarTelefonos();
        this.mostrarNotas();
    }
}
exports.Persona = Persona;
