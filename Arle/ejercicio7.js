const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¿Eres masculino o femenino? ", (genero) => {
  rl.question("¿Cuántos años tienes? ", (edad) => {
    edad = Number(edad);
    let ayuda = 0;

    if (genero.toLowerCase() === "femenino") {
      if (edad > 50) {
        ayuda = 120000;
      } else if (edad >= 30) {
        ayuda = 100000;
      }
    } else if (genero.toLowerCase() === "masculino") {
      ayuda = 40000;
    }

    console.log(`Te toca una ayuda de: $${ayuda}`);

    rl.close();
  });
});
