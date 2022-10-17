 /* 3- Crear un programa que pregunte si se desea buscar el mayor o 
            el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. 
            Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar
             mostrar el número mayor o menor de todos los ingresados según el elegido. */

const opcion = prompt("¿Desea saber el número mayor o menor? Indique a continuación:");
const cantidad = prompt("¿Entre cuántos elementos desea realizar la búsqueda?"); 

let lista = [];

while (lista.length <= Number(cantidad)) {
    let numero = prompt("Ingrese a la lista un número al azar");
    let agregar = lista.push(numero);

    if (Number(cantidad) - lista.length == 0 ) {
    break
    }
}
    console.log(lista);

    if (opcion === "mayor") {
        document.write("El mayor número de la lista es: " + Math.max(...lista) + ".");
        console.log("El mayor número de la lista es: " + Math.max(...lista) + ".");
    } else if (opcion === "menor") {
            document.write("El menor número de la lista es: " + Math.min(...lista) + ".");
            console.log("El menor número de la lista es: " + Math.min(...lista) + ".")
            };
            