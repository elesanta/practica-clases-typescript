import { consoleColor } from "../utiles/utiles";

export class Telefono {
  constructor(public tipo: string, public numero: string) {
    this.tipo = tipo;
    this.numero = numero;
  }

  info() {
    console.log("\n# Teléfono");
    consoleColor("Tipo", this.tipo);
    consoleColor("Número", this.numero);
  }
}
