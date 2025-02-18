let fisica = 7;
let quimica = 6;
let biologia = 8;
let matematicas = 9;
let informatica = 3;

let sumaDeCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentajeFinal = (sumaDeCalificaciones / 50) * 100;

let calificacion;
if (porcentajeFinal >= 0 && porcentajeFinal <= 59.9) {
    calificacion = "mala";
} else if (porcentajeFinal >= 60 && porcentajeFinal <= 80) {
    calificacion = "buena";
} else if (porcentajeFinal > 80) {
    calificacion = "excelente";
} 

console.log(`Tu porcentaje es ${porcentajeFinal}% y tu calificación es ${calificacion}.`);



