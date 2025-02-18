const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

rl.question("Ingrese el número de modelo de su automóvil: ", (modelo) => {
  modelo = Number(modelo);

  if (modelosDefectuosos.includes(modelo)) {
    console.log(" El automóvil está defectuoso, llevar a garantía.");
  } else {
    console.log(" Su automóvil no está defectuoso.");
  }

  rl.close();
});
