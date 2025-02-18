const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el tipo de lavadora (1 o 2): ", (tipo) => {
    const tiposDeLavadoras = parseInt(tipo);

    if (tiposDeLavadoras !== 1 && tiposDeLavadoras !== 2) {
        console.log(" Tipo de lavadora no válido.");
        rl.close();
        return;
    }

    rl.question("Ingrese la cantidad de lavadoras: ", (cantidadInput) => {
        const cantidad = parseInt(cantidadInput);

        rl.question("Ingrese la cantidad de horas: ", (horasInput) => {
            const horas = parseInt(horasInput);

            let costoPorHoras = tiposDeLavadoras === 1 ? 4000 : 3000;

            const costoBase = cantidad * horas * costoPorHoras;

          
            const descuento = cantidad > 3 ? costoBase * 0.03 : 0;

            const costoTotal = costoBase - descuento;

            console.log(` Costo total por alquilar ${cantidad} lavadoras tipo ${tiposDeLavadoras} por ${horas} horas: $${costoTotal.toFixed(2)}.`);

            rl.close();
        });
    });
});