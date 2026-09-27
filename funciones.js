function calcularDisponible(ingresos, egresos) {
let disponible = ingresos - egresos;


if (disponible < 0) {
    disponible = 0;
}

return disponible;


}

function calcularCapacidadPago(montoDisponible) {
let capacidad = montoDisponible * 0.50;


return capacidad;


}

function calcularInteresSimple(monto, tasa, plazoAnios) {
let interes = monto * (tasa / 100) * plazoAnios;


return interes;


}

function calcularTotalPagar(monto, interes) {
let comision = 100;


let total = monto + interes + comision;

return total;


}

function calcularCuotaMensual(totalPrestamo, plazoAnios) {
let totalMeses = plazoAnios * 12;


if (totalMeses === 0) {
    return 0;
}

let cuota = totalPrestamo / totalMeses;

return cuota;


}

function calcularSaldoFinal(disponible, cuotaMensual) {
return disponible - cuotaMensual;
}

function calcularPorcentajeCuota(ingresos, cuotaMensual) {


if (ingresos <= 0) {
    return 0;
}

return (cuotaMensual / ingresos) * 100;


}

function calcularCostoCredito(monto, totalPagar) {


if (monto <= 0) {
    return 0;
}

return ((totalPagar - monto) / monto) * 100;


}

function aprobarCredito(capacidadPago, cuotaMensual) {


if (cuotaMensual <= capacidadPago) {
    return true;
}

return false;


}

function analizarCredito(capacidadPago, cuotaMensual, saldoFinal) {


if (cuotaMensual <= 0) {
    return "INGRESA UN PLAZO VALIDO";
}

if (saldoFinal < 0) {
    return "CAPACIDAD DE PAGO INSUFICIENTE";
}

if (cuotaMensual > capacidadPago) {
    return "CAPACIDAD DE PAGO AJUSTADA";
}

return "CAPACIDAD DE PAGO ADECUADA";


}

function generarRecomendacion(
ingresos,
cuotaMensual,
saldoFinal,
porcentajeCuota,
costoCredito
) {


if (ingresos <= 0) {
    return "Ingresa tus ingresos mensuales para realizar el analisis.";
}

if (cuotaMensual <= 0) {
    return "Ingresa un plazo valido para calcular la cuota.";
}

if (saldoFinal < 0) {
    return "La cuota supera el dinero disponible despues de tus egresos.";
}

if (porcentajeCuota > 30) {
    return "La cuota representa una parte importante de tus ingresos. Revisa el monto o el plazo.";
}

if (costoCredito > 50) {
    return "El costo total del credito es elevado respecto al monto solicitado.";
}

return "La cuota puede ser cubierta con el dinero disponible. Revisa tambien el costo total y el plazo.";


}

/* FUNCIONES PARA LEER LOS INPUTS */

function recuperarTexto(idComponente) {


let componente = document.getElementById(idComponente);

if (componente) {
    return componente.value;
}

return "";


}

function recuperarFloat(idComponente) {


let valorTexto = recuperarTexto(idComponente);

let valorFloat = parseFloat(valorTexto);

if (isNaN(valorFloat)) {
    return 0;
}

return valorFloat;


}

function recuperarEntero(idComponente) {


let valorTexto = recuperarTexto(idComponente);

let valorEntero = parseInt(valorTexto);

if (isNaN(valorEntero)) {
    return 0;
}

return valorEntero;


}

/* MOSTRAR RESULTADOS */

function mostrarEnSpan(idComponente, valor) {


let componente = document.getElementById(idComponente);

if (!componente) {
    return;
}

componente.textContent = valor;


if (idComponente === "res-estado") {

    if (
        valor === "CREDITO APROBADO" ||
        valor === "CAPACIDAD DE PAGO ADECUADA"
    ) {
        componente.style.color = "#2d8540";
    }

    else if (
        valor === "CREDITO RECHAZADO" ||
        valor === "CAPACIDAD DE PAGO INSUFICIENTE"
    ) {
        componente.style.color = "#d8232a";
    }

    else {
        componente.style.color = "#072146";
    }
}


}

