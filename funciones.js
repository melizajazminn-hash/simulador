function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    return disponible < 0 ? 0 : disponible; // Si es negativo, devuelve 0
}

function calcularCapacidadPago(montoDisponible){
    // Calcula el 50% del monto disponible
    let capacidad = montoDisponible * 0.50;
    return capacidad;
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let interes = plazoAnios * monto * (tasa / 100);
    return interes;
}

function calcularTotalPagar(monto, interes){
    // Suma el monto, el interés y una comisión fija de 100
    let total = monto + interes + 100;
    return total;
}

function calcularCuotaMensual(totalPrestamo, plazoAnios) {
    let totalMeses = plazoAnios * 12;
    if (totalMeses === 0) return 0; // Evita la división por cero si el plazo es 0
    let cuota = totalPrestamo / totalMeses;
    return cuota;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    // Retorna true si la capacidad cubre la cuota, false si no
    return capacidadPago > cuotaMensual; 
}

/* ==========================================================================
   FUNCIONES DE LECTURA E INYECCIÓN DE LA INTERFAZ (DOM)
   ========================================================================== */

function recuperarTexto(idComponente){
    let componente = document.getElementById(idComponente);
    return componente ? componente.value : "";
}

function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return isNaN(valorFloat) ? 0 : valorFloat; // Si no es un número, devuelve 0
}

function recuperarEntero(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorTexto);
    return isNaN(valorEntero) ? 0 : valorEntero; // Si no es un número, devuelve 0
}

// SE CORRIGIÓ: Una sola función unificada con los IDs reales de tu HTML
function mostrarEnSpan(idComponente, valor){
    let componente = document.getElementById(idComponente);
    if (!componente) return;

    componente.textContent = valor;

    // Lógica dinámica de colores usando el ID real del HTML ("res-estado")
    if (idComponente === "res-estado") {
        if (valor === "CREDITO APROBADO") {
            componente.style.color = "#2d8540"; // Verde éxito de BBVA
        } else if (valor === "CREDITO RECHAZADO") {
            componente.style.color = "#d8232a"; // Rojo alerta de BBVA
        } else {
            componente.style.color = "#072146"; // Azul oscuro (ANALIZANDO...)
        }
    }
}

