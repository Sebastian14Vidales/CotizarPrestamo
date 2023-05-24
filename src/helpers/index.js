const formatearDinero = valor => {
    const formateador = new Intl.NumberFormat(
        "es",
        {
            style: "currency",
            "currency": "COP",
            minimumFractionDigits: 0
        });

    return formateador.format(valor)
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // mientras mayor es la cantidad, menor es el interés
    if (cantidad < 500000) {
        total = cantidad * 1.5; //50% de interés
    } else if (cantidad >= 500000 && cantidad < 1000000) {
        total = cantidad * 1.3; //30% de interés
    } else if (cantidad >= 1000000 && cantidad < 1500000) {
        total = cantidad * 1.15; //15% de interés
    } else {
        total = cantidad * 1.1; //10% de interés
    }

    // plazo - más plazo, mayor interés

    if (plazo === 6) {
        total *= 1.1;
    } else if (plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }

    return total;
}


export {
    formatearDinero,
    calcularTotalPagar
}