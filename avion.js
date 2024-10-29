// 1. En la carpeta ya creada, crear un nuevo archivo llamado avion.js
// 2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para
// iniciar el aterrizaje o no. Considerará para ello la altura y la velocidad del
// vuelo, teniendo en cuenta que:
// ● La velocidad debe estar comprendida entre 268 a 278km/hr.
// ● La altura debe estar comprendida entre 150m a 300m.


let velocidadMin = 272;

let velocidadMax = 276;

let alturaMin = 168;

let alturaMax = 254;

let mensaje = (velocidadMin >= 268 && velocidadMax <=278 && alturaMin >= 150 && alturaMax <= 300) ? `El avión está listo para el aterrizaje.` : 
`El avión no está listo para el aterrizaje.`;
console.log(mensaje);
