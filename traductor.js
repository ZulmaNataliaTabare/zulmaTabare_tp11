// Desarrollar el programa traductor condicional. La idea es que si el usuario
// ingresa una palabra como“perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le
// devuelva la misma palabra traducida al idioma inglés. Te recomendamos usar la
// estructura switch. 

// En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario
// un mensaje que le informe que “La palabra ingresada es incorrecta”



const prompt = require('prompt-sync')();

// Pide la entrada al usuario y lo traduce:                                                                 
function traducir() {

    // Muestra las opciones al usuario:
    console.log("Elige una palabra: perro, gato, madera, casa, libro, manzana, río, cielo, amigo, mesa, árbol, flor");

    // Pide al usuario que ingrese una palabra
    let palabra = prompt('Ingresa una palabra de la lista anterior: ');

    // Convierte la palabra a minúsculas para asegurar la comparación correcta
    palabra = palabra.toLowerCase();

    // Encuentra la traducción usando switch
    
    let translate = "";
    switch (palabra) {
        case "perro":
            translate = "Dog";
            break;
        case "gato":
            translate = "Cat";
            break;
        case "madera":
            translate = "Wood";
            break;
        case "casa":
            translate = "House";
            break;
        case "libro":
            translate = "Book";
            break;
        case "manzana":
            translate = "Apple";
            break;
        case "río":
            translate = "River";
            break;
        case "cielo":
            translate = "Sky";
            break;
        case "amigo":
            translate = "Friend";
            break;
        case "mesa":
            translate = "Table";
            break;
        case "árbol":
            translate = "Tree";
            break;
        case "flor":
            translate = "Flower";
            break;
        default:
            translate = "La palabra ingresada es incorrecta";
            break;
    }

    console.log(translate);
}

// Ejecuta la función traducir
traducir();