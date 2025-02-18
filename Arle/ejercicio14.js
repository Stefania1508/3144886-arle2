const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Tamaño del sándwich (pequeño/grande): ", (tamano) => {
  let total = tamano.toLowerCase() === "grande" ? 12000 : 6000;
  if (total === 6000 || total === 12000) {
    rl.question("¿Tocineta? (si/no): ", (toc) => {
      rl.question("¿Pavo? (si/no): ", (pav) => {
        rl.question("¿Queso? (si/no): ", (que) => {
          if (toc.toLowerCase() === "si") total += 3000;
          if (pav.toLowerCase() === "si") total += 3000;
          if (que.toLowerCase() === "si") total += 2500;
          console.log(` Total a pagar: $${total}`);
          rl.close();
        });
      });
    });
  } else {
    console.log("❌ Tamaño no válido.");
    rl.close();
  }
});
