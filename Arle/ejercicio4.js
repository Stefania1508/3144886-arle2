
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Por favor, ingresa un número: ", (input) => {
    let numero7 = parseInt(input);

    if (isNaN(numero7)) {
        console.log("Por favor, ingresa un número válido.");
    } else if (numero7 % 2 === 0) {
        console.log(`El número ${numero7} es par.`);
    } else {
        console.log(`El número ${numero7} es impar.`);
    }

    rl.close(); // Cierra la interfaz de entrada
});
