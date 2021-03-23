import { Direccion } from "./models/direccion.model";
import { Mail } from "./models/mail.model";
import { Persona } from "./models/persona.model";
import { Telefono } from "./models/telefono.model";

const agenda: Persona[] = [];

/**
 *  Datos Persona 1
 */

let direcciones = [
  new Direccion("Calle Pez", "5", "4º", "A", "28000", "Madrid", "Madrid"),
  new Direccion("Calle Silbato", "1", "1º", "B", "28000", "Madrid", "Madrid"),
];
let correos = [
  new Mail("personal", "pepe@gmail.com"),
  new Mail("trabajo", "pepe@corteingles.com"),
];

let telefonos = [
  new Telefono("personal", "915555555"),
  new Telefono("trabajo", "916664477"),
];

let notas = ["Esto es una nota de prueba", "Esto es otra nota de prueba"];

let persona = new Persona(
  "Pepe",
  "Juarez",
  "45",
  "012345678A",
  "14/10/1984",
  "Rojo",
  "V",
  direcciones,
  correos,
  telefonos,
  notas
);

// Guardamos los datos en la agenda
agenda.push(persona);

/**
 *  Datos Persona 2
 */
direcciones = [
  new Direccion("Calle Silvano", "25", "3º", "C", "28430", "Alpedrete", "Madrid"),
  new Direccion("Calle Huesca", "11", "6º", "D", "28522", "Rivas Vaciamadrid", "Madrid"),
];
correos = [
  new Mail("personal", "mariagarcia@gmail.com"),
  new Mail("trabajo", "m.garcia@endesa.com"),
];

telefonos = [
  new Telefono("movil", "698451236"),
  new Telefono("trabajom", "632145698"),
];

notas = ["Esto es una nota de prueba", "Esto es otra nota de prueba"];

persona = new Persona(
  "Maria",
  "García",
  "39",
  "012345678B",
  "21/06/1981",
  "Morado",
  "F",
  direcciones,
  correos,
  telefonos,
  notas
);

// Guardamos los datos en la agenda
agenda.push(persona);

/**
 *  Datos Persona 3
 */
direcciones = [
  new Direccion("Calle Belianes", "16", "3º", "A", "28043", "Madrid", "Madrid"),
  new Direccion("Calle Alcalá", "169", "5º", "B", "28016", "Madrid", "Madrid"),
];
correos = [
  new Mail("personal", "marta.fernandez@gmail.com"),
  new Mail("trabajo", "martaf@hgugm.com"),
];

telefonos = [
  new Telefono("casa", "915868191"),
  new Telefono("movil", "654123695"),
];

notas = ["Esto es una nota de prueba", "Esto es otra nota de prueba"];

persona = new Persona(
  "Marta",
  "Fernandez",
  "43",
  "012345678C",
  "03/12/1977",
  "Rosa",
  "F",
  direcciones,
  correos,
  telefonos,
  notas
);

// Guardamos los datos en la agenda
agenda.push(persona);

// Buscamos a la persona con DNI 012345678B para añadirle nuevos datos
for (let i = 0; i < agenda.length; i++) {
  if (agenda[i].dni === "012345678B") {
    let nuevaDireccion = new Direccion(
      "Calle Provincias",
      "7",
      "4º",
      "A",
      "28549",
      "Arganda del Rey",
      "Madrid"
    );
    agenda[i].addDireccion(nuevaDireccion);
    let nuevoTelefono = new Telefono("movil", "541236157");
    agenda[i].addTelefono(nuevoTelefono);
    let nuevoMail = new Mail("personal", "margar@nuevocorreo.com");
    agenda[i].addCorreo(nuevoMail);
  }

  // Usamos el metodo mostrarInformación de cada persona para mostrar la información por consola
  agenda[i].mostrarInformacion();
}