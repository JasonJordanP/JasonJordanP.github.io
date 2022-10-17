/* 14 - Crear un programa que tenga un menú con las siguientes opciones:
○	AGREGAR TAREA: debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
○	MODIFICAR TAREA: debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
○	ELIMINAR TAREA: debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
○	VER TAREAS: debe listar todas las tareas hasta el momento
○	SALIR: debe terminar la ejecución del programa
●	El programa debe mostrar el menú de opciones, y permitir ingresar una opción. 
Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. */


let lista = ['lava', 'planchar', 'bordar'];

let opciones = prompt("Ingrese el número de la opción que desea: \n 1- AGREGAR TAREA. \n 2- MODIFICAR TAREA. \n 3- ELIMINAR TAREA. \n 4- VER TAREAS. \n 5- SALIR.");
console.log(lista);

let ultimoElemento = lista.length - 1;

switch (opciones) {

    case '1':
        let tareaAgregada = prompt("Indique el nombre de la tarea que desea agregar a la lista");  
        let agregado = lista.push(tareaAgregada);
        console.log(lista);
        break;

    case '2':
        let modificar = Number(prompt("Indique el número de tarea que desea modificar comenzando desde el 0"));
        console.log("Usted modificará este elemento de la lista: " + lista[modificar]);

            if (modificar > lista.length) { 
                alert("No existe ese elemento en la lista, el último elemento es el número: " + ultimoElemento);   
            } else {
                let newElement = prompt("Ingrese el nombre del nuevo elemento");
                lista.splice(modificar, 1, newElement);
                console.log("La lista quedó conformada de la siguiente manera: " + lista);
            }
            break; 
        
    case '3': 
        let eliminar = prompt("Indique la posición del elemento que desea eliminar, comenzando desde el 0");
        console.log("Usted eliminará el siguiente elemento de la lista: " + lista[eliminar]);
        let respuesta = prompt("Está seguro de que desea eliminar " + lista [eliminar] + " de la lista? Responda 'si' o 'no'.");
                
            if (respuesta = "si") {
                lista.splice(eliminar, 1);
                console.log(lista);
            } else { 
                console.log("No borró ningún elemento. La lista se mantiene tal y como estaba!");
            }
            break;

    case '4':
        console.log("La lista es: " + lista);
        break;

    case '5':
        document.write("El programa ha finalizado.");
        break;

    default:
    opciones = prompt("Ingrese el número de la opción que desea: \n 1- AGREGAR TAREA. \n 2- MODIFICAR TAREA. \n 3- ELIMINAR TAREA. \n 4- VER TAREAS. \n 5- SALIR.");

};