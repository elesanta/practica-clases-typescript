export function consoleColor(clave: string, valor: string): void {
  console.log("%s\x1b[32m%s\x1b[0m", `${clave}: `, valor);
}
