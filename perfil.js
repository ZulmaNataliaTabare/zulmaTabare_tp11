
// Desarrolla un programa que le indique al usuario (en base a su perfil o 
// responsabilidades) qué puede hacer o no en el sistema.

let perfil = "INVITADO";
let mensaje = " ";

switch (perfil) {
    case "Administrador":
    case "administrador":
    case "ADMINISTRADOR":
        mensaje = "Usted tiene todos los privilegios de uso del sistema";
        break;
    case "Asistente":
    case "asistente":
    case "ASISTENTE":
        mensaje = "Usted sólo tiene permisos de registrar, modificar y consultar datos";
        break;
    case "Invitado":
    case "invitado":
    case "INVITADO":
        mensaje = "Usted sólo tiene permisos de consultar datos";
        break;
    default:
        mensaje = "Debe especificar un perfil válido";
        break;
}

console.log(mensaje);
