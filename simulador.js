window.onload = function() {
    let btnCalcular = document.getElementById("btnCalcularCredito");
    let btnReiniciar = document.getElementById("btnReiniciar");

    btnCalcular.onclick = calcular;
    btnReiniciar.onclick = reiniciarSimulador;
};


function calcular(){
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let disponible = calcularDisponible(ingresos, egresos);

    mostrarEnSpan("lblDisponibleValor", disponible.toFixed(2));

    let capacidad = calcularCapacidadPago(disponible);

    mostrarEnSpan("lblCapacidadValor", capacidad.toFixed(2));

    let monto = recuperarEntero("txtMonto");
    let plazo = recuperarEntero("txtPlazo");
    let tasa = recuperarEntero("txtTasaInteres");

    let interes = calcularInteresSimple(monto, tasa, plazo);
    mostrarEnSpan("lblInteresValor", interes.toFixed(2));

    let totalPrestamo = calcularTotalPagar(monto, interes);
    mostrarEnSpan("lblTotalValor", totalPrestamo);

    let cuotaMensual = calcularCuotaMensual(totalPrestamo, plazo);
    mostrarEnSpan("lblCuotaValor", cuotaMensual.toFixed(2));

    let estaAprobado = aprobarCredito(capacidad, cuotaMensual);
    if (estaAprobado === true) {
        mostrarEnSpan("lblEstadoCredito", "CREDITO APROBADO");
    } else {
        mostrarEnSpan("lblEstadoCredito", "CREDITO RECHAZADO");
    }
}

function reiniciarSimulador() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    mostrarEnSpan("lblDisponibleValor", "");
    mostrarEnSpan("lblCapacidadValor", "");
    mostrarEnSpan("lblInteresValor", "");
    mostrarEnSpan("lblTotalValor", "");
    mostrarEnSpan("lblCuotaValor", "");
    mostrarEnSpan("lblEstadoCredito", "PROCESANDO");
}