const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Diagnóstico de problemas en la computadora");

rl.question("¿La computadora emite un pitido al iniciar? (si/no): ", (pitido) => {
  rl.question("¿El disco duro gira? (si/no): ", (disco) => {
    pitido = pitido.toLowerCase();
    disco = disco.toLowerCase();

    if (pitido === "si" && disco === "si") {
      console.log(" La computadora está averiada. Póngase en contacto con el técnico de apoyo.");
    } else if (pitido === "si" && disco === "no") {
      console.log(" Verificar contactos de la unidad.");
    } else if (pitido === "no" && disco === "no") {
      console.log(" Traiga la computadora para repararla en la central.");
    } else if (pitido === "no" && disco === "si") {
      console.log(" Compruebe las conexiones de altavoces.");
    } else {
      console.log(" Respuesta inválida. Use 'si' o 'no'.");
    }

    rl.close();
  });
});
