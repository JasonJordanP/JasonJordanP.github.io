/* 6- Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, 
            cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos,
             debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y 
             terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables. 
*/
const username = "androide123"
const password = "dinosaurio"

let user = prompt("Ingrese su nombre de usuario");
let pass = prompt("Ingrese la contraseña");
let correcto = false;

let intentos=1; 

while (intentos<3 && !correcto) {
    if (user === "androide123" && pass === "dinosaurio") {
            correcto = true;
            alert("Acceso concedido");
            document.write("Bienvenido(a) a la página principal");
                
    } else { 
            intentos++;
            alert("Usuario y/o contraseña incorrectos. Inténtelo nuevamente");
            user = prompt("Indique su nombre de usuario");
            pass = prompt("Ingrese la contraseña nuevamente");
        } 
} if (!correcto) {
            alert("Superó los tres intentos permitidos. El programa finalizará.");
        };