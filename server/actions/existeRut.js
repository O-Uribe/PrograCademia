export default function checkRut(rut) {
  
    // Obtiene el valor ingresado quitando puntos y guión.
    var valor = clean(rut.value);
  
    // Divide el valor ingresado en dígito verificador y resto del RUT.
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();
  
    // Separa con un Guión el cuerpo del dígito verificador.
    rut.value = format(rut.value);

    // Calcular Dígito Verificador "Método del Módulo 11"
    suma = 0;
    multiplo = 2;
  
    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {
      // Obtener su Producto con el Múltiplo Correspondiente
      index = multiplo * valor.charAt(cuerpo.length - i);
  
      // Sumar al Contador General
      suma = suma + index;
  
      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }
  
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
  
    // Casos Especiales (0 y K)
    dv = dv == "K" ? 10 : dv;
    dv = dv == 0 ? 11 : dv;
  
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) {
      rut.setCustomValidity("RUT Inválido");
      console.log ('El RUT ingresado: ' + rut.value + ' Es INCORRECTO.');
  
      return false;
    } else {
      rut.setCustomValidity("RUT Válido");
      console.log ('El RUT ingresado: ' + rut.value + ' Es CORRECTO.');
      return true;
    }
  }