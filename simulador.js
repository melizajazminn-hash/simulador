// Esperar a que el navegador termine de cargar toda la estructura del HTML
document.addEventListener("DOMContentLoaded", () => {
    
    const btnCalcular = document.getElementById("btn-calcular");
    const btnReiniciar = document.getElementById("btn-reiniciar");

    if (!btnCalcular || !btnReiniciar) return;

    // ==========================================================================
    // ACCIÓN DEL BOTÓN: CALCULAR CRÉDITO
    // ==========================================================================
    btnCalcular.addEventListener("click", () => {
        // 1. Recuperar valores numéricos desde el HTML usando tus funciones de lectura
        const ingresos = recuperarFloat("ingresos");
        const egresos  = recuperarFloat("egresos");
        const monto    = recuperarFloat("monto");
        const plazo    = recuperarEntero("plazo"); // El plazo en años suele manejarse como entero
        const tasa     = recuperarFloat("tasa");

        // 2. Realizar los cálculos financieros encadenando tus fórmulas de funciones.js
        const disponible    = calcularDisponible(ingresos, egresos);
        const capacidadPago = calcularCapacidadPago(disponible);
        const interes       = calcularInteresSimple(monto, tasa, plazo);
        const totalPagar    = calcularTotalPagar(monto, interes);
        const cuotaMensual  = calcularCuotaMensual(totalPagar, plazo);
        
        // Evaluar la respuesta booleana (true/false) de tu función aprobarCredito
        const esAprobado    = aprobarCredito(capacidadPago, cuotaMensual);
        const estadoTexto   = esAprobado ? "CREDITO APROBADO" : "CREDITO RECHAZADO";

        // 3. Inyectar y mostrar los resultados formateados en la interfaz (con dos decimales)
        mostrarEnSpan("res-disponible", `$${disponible.toFixed(2)}`);
        mostrarEnSpan("res-capacidad",  `$${capacidadPago.toFixed(2)}`);
        mostrarEnSpan("res-interes",    `$${interes.toFixed(2)}`);
        mostrarEnSpan("res-total",      `$${totalPagar.toFixed(2)}`);
        
        // Control de seguridad para la cuota por si el plazo ingresado es 0
        if (plazo > 0) {
            mostrarEnSpan("res-cuota", `$${cuotaMensual.toFixed(2)}`);
        } else {
            mostrarEnSpan("res-cuota", "\$0.00");
        }

        // 4. Mostrar el veredicto final en el elemento del estado del crédito
        // Nota: Asegúrate de que el id en funciones.js busque "res-estado" para aplicar la lógica de colores
        mostrarEnSpan("res-estado", estadoTexto);
    });

    // ==========================================================================
    // ACCIÓN DEL BOTÓN: REINICIAR (LIMPIAR INTERFAZ)
    // ==========================================================================
    btnReiniciar.addEventListener("click", () => {
        // Limpiar completamente el contenido escrito en las cajas de texto
        document.getElementById("ingresos").value = "";
        document.getElementById("egresos").value = "";
        document.getElementById("monto").value = "";
        document.getElementById("plazo").value = "";
        document.getElementById("tasa").value = "";

        // Restablecer los valores visuales base
        mostrarEnSpan("res-disponible", "\$0.00");
        mostrarEnSpan("res-capacidad",  "\$0.00");
        mostrarEnSpan("res-interes",    "\$0.00");
        mostrarEnSpan("res-total",      "\$0.00");
        mostrarEnSpan("res-cuota",      "\$0.00");

        // Regresar el estado original neutral
        mostrarEnSpan("res-estado", "ANALIZANDO...");
    });
});
