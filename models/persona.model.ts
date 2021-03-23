import { Telefono } from "./telefono.model";
import { Direccion } from "./direccion.model";
import { Mail } from "./mail.model";
import { consoleColor } from "../utiles/utiles";

export class Persona {
  constructor(
    public nombre: string,
    public apellidos: string,
    public edad: string,
    public dni: string,
    public cumpleanos: string,
    public colorFavorito: string,
    public sexo: string,
    public direcciones: Direccion[],
    public correos: Mail[],
    public telefonos: Telefono[],
    public notas: string[]
  ) {
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

  mostrarCorreos(): void {
    console.log("\n# Registro de correos");
    console.table(this.correos);
  }

  addCorreo(correo: Mail) {
    this.correos.push(correo);
  }

  mostrarTelefonos(): void {
    console.log("\n# Registro de teléfonos");
    console.table(this.telefonos);
  }

  addTelefono(telefono: Telefono) {
    this.telefonos.push(telefono);
  }

  mostrarDirecciones(): void {
    console.log("\n# Registro de direcciones");
    console.table(this.direcciones);
  }

  addDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  mostrarNotas(): void {
    console.log("\n# Registro de notas");
    console.table(this.notas);
  }

  addNotas(notas: string) {
    this.notas.push(notas);
  }

  mostrarInformacion() {
    console.log("\n# Info de contacto", "#".repeat(60), "\n");
    consoleColor("Nombre completo", this.nombreCompleto);
    consoleColor("Edad", this.edad);
    consoleColor("DNI", this.dni);
    consoleColor("Cumpleaños", this.cumpleanos);
    consoleColor("Color favorito", this.colorFavorito);
    consoleColor("Sexo", this.sexo);
    this.mostrarCorreos();
    this.mostrarDirecciones();
    this.mostrarTelefonos();
    this.mostrarNotas();
  }
}
