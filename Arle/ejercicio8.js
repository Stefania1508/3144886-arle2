const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Opciones de mensualidad:");
console.log("1. 15 días - $18,000");
console.log("2. 30 días - $35,000");
console.log("3. 3 meses - $86,000");

rl.question("Elige una opción (1, 2 o 3): ", (opcion) => {
  let costo = 0;

  if (opcion === "1") {
    costo = 18000;
  } else if (opcion === "2") {
    costo = 35000;
  } else if (opcion === "3") {
    costo = 86000;
  } else {
    console.log("Opción no válida.");
    rl.close();
    return;
  }

  console.log(`El costo de tu mensualidad es: $${costo}`);
  rl.close();
});
