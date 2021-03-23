"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleColor = void 0;
function consoleColor(clave, valor) {
    console.log("%s\x1b[32m%s\x1b[0m", `${clave}: `, valor);
}
exports.consoleColor = consoleColor;
