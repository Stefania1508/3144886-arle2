const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el primer número: ", (n1) => {
  rl.question("Ingrese el segundo número: ", (n2) => {
    rl.question("Ingrese el tercer número: ", (n3) => {            
      console.log(`El número mayor es: ${Math.max(Number(n1), Number(n2), Number(n3))}`);
      rl.close();
    });
  });
});

