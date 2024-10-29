// Desarrollar el programa mi primera calculadora. Queremos que,usando
//  estructura switch, muestres al usuario cuál es el resultado de una operación
//  aritmética. Esto se hará en base a dos valores suministrados y al tipo de
//  operación indicada: “sumar”, “restar”, “multiplicar”, “dividir”.
// Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
//  respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
//  En caso de que la operación aritmética sea distinta a la esperada, deberás
//  mostrarle un mensaje al usuario que le informe que “Las operaciones
//  aceptadas son: sumar-restar-multiplicar-dividir”.





const prompt = require('prompt-sync')();

// Define las funciones de las operaciones 

const operaciones = {
    sumar: (num1, num2) => num1 + num2,
    restar: (num1, num2) => num1 - num2,
    multiplicar: (num1, num2) => num1 * num2,
    dividir: (num1, num2) => num1 / num2
};

// Función principal para manejar las operaciones

function calculadora() {
    let primerNumero = parseFloat(prompt('Ingresa el primer número: '));
    let segundoNumero = parseFloat(prompt('Ingresa el segundo número: '));
    let operacion = prompt('Elige una operación (sumar, restar, multiplicar, dividir): ').toLowerCase();

    let resultado;
    
    switch (operacion) {
        case 'sumar':
            resultado = operaciones.sumar(primerNumero, segundoNumero);
            console.log(`El resultado de sumar ${primerNumero} + ${segundoNumero} es ${resultado}`);
            break;
        case 'restar':
            resultado = operaciones.restar(primerNumero, segundoNumero);
            console.log(`El resultado de restar ${primerNumero} - ${segundoNumero} es ${resultado}`);
            break;
        case 'multiplicar':
            resultado = operaciones.multiplicar(primerNumero, segundoNumero);
            console.log(`El resultado de multiplicar ${primerNumero} * ${segundoNumero} es ${resultado}`);
            break;
        case 'dividir':
            resultado = operaciones.dividir(primerNumero, segundoNumero);
            console.log(`El resultado de dividir ${primerNumero} / ${segundoNumero} es ${resultado}`);
            break;
        default:
            console.log('“Las operaciones aceptadas son: sumar-restar-multiplicar-dividir”.');
            break;
    }
}

// Ejecutar la función principal
calculadora();