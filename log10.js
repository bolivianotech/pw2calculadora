/*
 * OPERACIÓN LOGARITMO BASE 10
 * Calcula el logaritmo decimal.
 */

function logaritmoBase10() {
  if (expresion === '') {
    return;
  }

  const numero = Number(expresion);

  if (!Number.isFinite(numero) || numero <= 0) {
    if (historial) {
      historial.textContent = '';
    }

    pantalla.textContent = 'Error';
    expresion = '';
    return;
  }

  const resultado = Math.log10(numero);

  if (historial) {
    historial.textContent = 'log(' + numero + ') =';
  }

  expresion = String(resultado);
  actualizarPantalla();
}
