const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Verificar si los ángulos forman un triángulo.");

rl.question("Ingresa el primer ángulo: ", (a1) => {
  rl.question("Ingresa el segundo ángulo: ", (a2) => {
    rl.question("Ingresa el tercer ángulo: ", (a3) => {
      let angulo1 = Number(a1);
      let angulo2 = Number(a2);
      let angulo3 = Number(a3);

      let suma = angulo1 + angulo2 + angulo3;

      if (suma === 180) {
        console.log(" Los ángulos forman un triángulo válido.");
      } else {
        console.log(" Los ángulos NO forman un triángulo.");
      }

      rl.close();
    });
  });
});
