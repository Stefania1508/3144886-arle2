const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su operador (Claro, Tigo o Movistar): ", (operador) => {
  operador = operador.toLowerCase();

  let cargoFijo, valorMinuto, paqueteDatos;

  if (operador === "tigo") {
    cargoFijo = 45000; valorMinuto = 200; paqueteDatos = 12000;
  } else if (operador === "claro") {
    cargoFijo = 30000; valorMinuto = 100; paqueteDatos = 18000;
  } else if (operador === "movistar") {
    cargoFijo = 40000; valorMinuto = 250; paqueteDatos = 8000;
  } else {
    console.log("❌ Operador no válido.");
    rl.close();
    return;
  }

  rl.question("Minutos internacionales consumidos: ", (minutos) => {
    let total = cargoFijo + (Number(minutos) * valorMinuto) + paqueteDatos;
    console.log(` Total a pagar: $${total}`);
    rl.close();
  });
});
