/* 2- Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas 
           canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones 
           elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y 
           la playlist con los temas hasta el momento a medida que se va a actualizando. 
           Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones. */

    const name = prompt("Ingrese el nombre de su playlist");
    const cantidad = prompt("Indique la cantidad de canciones que tendrá la misma");
                
    let playlist = [];

    while (playlist.length <= Number(cantidad)) {
        let song = prompt("Ingrese el nombre de la canción a agregar");

        let agregar = playlist.push(song);
                
        let porAgregar = (Number(cantidad) - Number(playlist.length));
                
        alert("La playlist " + name + " tiene los siguientes elementos: " 
             + playlist + ". Todavía debe agregar " + porAgregar + " cancion(es).");
                
        if (porAgregar == 0) {
            alert("La playlist " + name + " tiene los siguientes elementos: " 
            + playlist + ".");
            break;
            }
        }
                
                