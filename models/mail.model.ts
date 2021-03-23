import { consoleColor } from "../utiles/utiles";

export class Mail {
  constructor(public tipo: string, public direccion: string) {
    this.tipo = tipo;
    this.direccion = direccion;
  }

  info() {
    console.log("\n# Correo");
    consoleColor("Tipo", this.tipo);
    consoleColor("Dirección", this.direccion);
  }
}
