let final = 1;
let contador = 0;



while (contador <= final) {

    let numero = prompt("ingrese el numero de la tabla de multiplicar que desea");
    if (parseInt(numero)) {

        final = (prompt("Ingrese el valor hasta el cual se va a calcular la tabla de multiplicar"));
        if (parseInt(final)) {

            console.log("Tabla de multiplicacion del numero " + numero);

            for (let i = 0; i <= final; i++) {
                resultado = (numero * i);
                console.log(numero + " X " + i + " = " + resultado + "\n");
                contador += 1
            }
        } else {
            prompt("Error no es un numero");
            break;
        }
    } else {
        prompt("verifica por favor, no es un numero");
        break;
    }


}