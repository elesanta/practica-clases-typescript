"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direccion_model_1 = require("./models/direccion.model");
const mail_model_1 = require("./models/mail.model");
const persona_model_1 = require("./models/persona.model");
const telefono_model_1 = require("./models/telefono.model");
const agenda = [];
/**
 *  Datos Persona 1
 */
let direcciones = [
    new direccion_model_1.Direccion("Calle Pez", "5", "4º", "A", "28000", "Madrid", "Madrid"),
    new direccion_model_1.Direccion("Calle Silbato", "1", "1º", "B", "28000", "Madrid", "Madrid"),
];
let correos = [
    new mail_model_1.Mail("personal", "pepe@gmail.com"),
    new mail_model_1.Mail("trabajo", "pepe@corteingles.com"),
];
let telefonos = [
    new telefono_model_1.Telefono("personal", "915555555"),
    new telefono_model_1.Telefono("trabajo", "916664477"),
];
let notas = ["Esto es una nota de prueba", "Esto es otra nota de prueba"];
let persona = new persona_model_1.Persona("Pepe", "Juarez", "45", "012345678A", "14/10/1984", "Rojo", "V", direcciones, correos, telefonos, notas);
// Guardamos los datos en la agenda
agenda.push(persona);
/**
 *  Datos Persona 2
 */
direcciones = [
    new direccion_model_1.Direccion("Calle Silvano", "25", "3º", "C", "28430", "Alpedrete", "Madrid"),
    new direccion_model_1.Direccion("Calle Huesca", "11", "6º", "D", "28522", "Rivas Vaciamadrid", "Madrid"),
];
correos = [
    new mail_model_1.Mail("personal", "mariagarcia@gmail.com"),
    new mail_model_1.Mail("trabajo", "m.garcia@endesa.com"),
];
telefonos = [
    new telefono_model_1.Telefono("movil", "698451236"),
    new telefono_model_1.Telefono("trabajom", "632145698"),
];
notas = ["Esto es una nota de prueba", "Esto es otra nota de prueba"];
persona = new persona_model_1.Persona("Maria", "García", "39", "012345678B", "21/06/1981", "Morado", "F", direcciones, correos, telefonos, notas);
// Guardamos los datos en la agenda
agenda.push(persona);
/**
 *  Datos Persona 3
 */
direcciones = [
    new direccion_model_1.Direccion("Calle Belianes", "16", "3º", "A", "28043", "Madrid", "Madrid"),
    new direccion_model_1.Direccion("Calle Alcalá", "169", "5º", "B", "28016", "Madrid", "Madrid"),
];
correos = [
    new mail_model_1.Mail("personal", "marta.fernandez@gmail.com"),
    new mail_model_1.Mail("trabajo", "martaf@hgugm.com"),
];
telefonos = [
    new telefono_model_1.Telefono("casa", "915868191"),
    new telefono_model_1.Telefono("movil", "654123695"),
];
notas = ["Esto es una nota de prueba", "Esto es otra nota de prueba"];
persona = new persona_model_1.Persona("Marta", "Fernandez", "43", "012345678C", "03/12/1977", "Rosa", "F", direcciones, correos, telefonos, notas);
// Guardamos los datos en la agenda
agenda.push(persona);
// Buscamos a la persona con DNI 012345678B para añadirle nuevos datos
for (let i = 0; i < agenda.length; i++) {
    if (agenda[i].dni === "012345678B") {
        let nuevaDireccion = new direccion_model_1.Direccion("Calle Provincias", "7", "4º", "A", "28549", "Arganda del Rey", "Madrid");
        agenda[i].addDireccion(nuevaDireccion);
        let nuevoTelefono = new telefono_model_1.Telefono("movil", "541236157");
        agenda[i].addTelefono(nuevoTelefono);
        let nuevoMail = new mail_model_1.Mail("personal", "margar@nuevocorreo.com");
        agenda[i].addCorreo(nuevoMail);
    }
    // Usamos el metodo mostrarInformación de cada persona para mostrar la información por consola
    agenda[i].mostrarInformacion();
}
