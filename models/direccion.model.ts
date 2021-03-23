import { consoleColor } from "../utiles/utiles";

export class Direccion {
  constructor(
    public calle: string,
    public numero: string,
    public piso: string,
    public letra: string,
    public cp: string,
    public poblacion: string,
    public provincia: string
  ) {
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
    consoleColor(
      "Dirección",
      `${this.calle}, ${this.numero} - ${this.piso} ${this.letra}`
    );
    consoleColor("C.P.", this.cp);
    consoleColor("Población", this.poblacion);
    consoleColor("Provincia", this.provincia);
  }
}
