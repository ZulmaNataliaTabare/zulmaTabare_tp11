// Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el
//  operador condicional ternario, queremos determinar cuánto va a pagar un hogar
//  según su consumo.

let pagoMes = 12000;

let topeConsumno = 300; //Decidí crear otra variable, porque el tope del consumo puede ser que vaya variando con el correr del tiempo. 

let aumento = "20%"; //Decidí crear otra variable, porque el porcentaje de aumento puede ser que vaya variando con el correr del tiempo.

let consumoKWH = 450;

let pagoFinal = pagoMes + (pagoMes * 0.20)

let mensaje = (consumoKWH > topeConsumno) ? `"Debido a que su hogar ha tenido un consumo de ${consumoKWH}Kwh, en  base al ajuste
tarifario (hogares con consumo mayor a ${topeConsumno}Kwh por mes tendrán un 
aumento del ${aumento}), cumplimos con informarle que se ha ajustado el total a 
pagar, que será de $${pagoFinal}"` :

`"Debido a que su hogar ha tenido un consumo de ${consumoKWH}Kwh, en  base al ajuste
    tarifario (hogares con consumo mayor a ${topeConsumno}Kwh por mes tendrán un 
    aumento del ${aumento}), cumplimos con informarle que se le seguirá manteniendo el subsidio y el total a 
    pagar será de $${pagoMes}"`;
console.log(mensaje); 