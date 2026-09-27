document.addEventListener("DOMContentLoaded", () => {

const btnCalcular = document.getElementById("btn-calcular");
const btnReiniciar = document.getElementById("btn-reiniciar");


if (!btnCalcular || !btnReiniciar) {
    return;
}


/* ============================================================
   CALCULAR CRÉDITO
   ============================================================ */

btnCalcular.addEventListener("click", () => {

    // 1. Recuperar datos ingresados

    const ingresos = recuperarFloat("ingresos");
    const egresos = recuperarFloat("egresos");
    const monto = recuperarFloat("monto");
    const plazo = recuperarEntero("plazo");
    const tasa = recuperarFloat("tasa");


    // 2. Calcular situación financiera

    const disponible =
        calcularDisponible(ingresos, egresos);

    const capacidadPago =
        calcularCapacidadPago(disponible);


    // 3. Calcular costo del crédito

    const interes =
        calcularInteresSimple(
            monto,
            tasa,
            plazo
        );

    const totalPagar =
        calcularTotalPagar(
            monto,
            interes
        );


    // 4. Calcular cuota mensual

    const cuotaMensual =
        calcularCuotaMensual(
            totalPagar,
            plazo
        );


    // 5. Nuevos indicadores financieros

    const saldoFinal =
        calcularSaldoFinal(
            disponible,
            cuotaMensual
        );


    const porcentajeCuota =
        calcularPorcentajeCuota(
            ingresos,
            cuotaMensual
        );


    const costoCredito =
        calcularCostoCredito(
            monto,
            totalPagar
        );


    // 6. Analizar capacidad de pago

    const estado =
        analizarCredito(
            capacidadPago,
            cuotaMensual,
            saldoFinal
        );


    const esAprobado =
        aprobarCredito(
            capacidadPago,
            cuotaMensual
        );


    // 7. Mostrar resultados básicos

    mostrarEnSpan(
        "res-disponible",
        `$${disponible.toFixed(2)}`
    );


    mostrarEnSpan(
        "res-capacidad",
        `$${capacidadPago.toFixed(2)}`
    );


    mostrarEnSpan(
        "res-interes",
        `$${interes.toFixed(2)}`
    );


    mostrarEnSpan(
        "res-total",
        `$${totalPagar.toFixed(2)}`
    );


    mostrarEnSpan(
        "res-cuota",
        `$${cuotaMensual.toFixed(2)}`
    );


    // 8. Mostrar análisis financiero

    mostrarEnSpan(
        "res-saldo-final",
        `$${saldoFinal.toFixed(2)}`
    );


    mostrarEnSpan(
        "res-endeudamiento",
        `${porcentajeCuota.toFixed(2)}%`
    );


    mostrarEnSpan(
        "res-costo-credito",
        `${costoCredito.toFixed(2)}%`
    );


    // 9. Mostrar estado

    mostrarEnSpan(
        "res-estado",
        estado
    );


    // 10. Generar explicación

    const recomendacion =
        generarRecomendacion(
            ingresos,
            cuotaMensual,
            saldoFinal,
            porcentajeCuota,
            costoCredito
        );


    mostrarEnSpan(
        "res-recomendacion",
        recomendacion
    );

});


/* ============================================================
   REINICIAR
   ============================================================ */

btnReiniciar.addEventListener("click", () => {

    document.getElementById("ingresos").value = "";
    document.getElementById("egresos").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("plazo").value = "";
    document.getElementById("tasa").value = "";


    mostrarEnSpan(
        "res-disponible",
        "$0.00"
    );


    mostrarEnSpan(
        "res-capacidad",
        "$0.00"
    );


    mostrarEnSpan(
        "res-interes",
        "$0.00"
    );


    mostrarEnSpan(
        "res-total",
        "$0.00"
    );


    mostrarEnSpan(
        "res-cuota",
        "$0.00"
    );


    mostrarEnSpan(
        "res-saldo-final",
        "$0.00"
    );


    mostrarEnSpan(
        "res-endeudamiento",
        "0%"
    );


    mostrarEnSpan(
        "res-costo-credito",
        "0%"
    );


    mostrarEnSpan(
        "res-estado",
        "ANALIZANDO..."
    );


    mostrarEnSpan(
        "res-recomendacion",
        "Ingresa tus datos para analizar tu capacidad de pago."
    );

});


});

