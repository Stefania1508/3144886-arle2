let nombre = "ximena garcia";
let horas = 15;

let salario;
if (horas <= 10) {
    salario = horas * 30000;
} else {
    salario = horas * 33000;
}

console.log("Señor/a " + nombre + ", el número de horas es " + horas + " y su salario equivale a $" + salario);
