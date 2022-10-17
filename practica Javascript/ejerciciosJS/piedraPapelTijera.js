/* 5- Al ejercicio de Piedra, papel, tijera de condicionales, 
            agregarle la posibilidad de jugar la cantidad de rondas que se deseen. 
            Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, 
            puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó. 
    */                   
let inicio = 1;
let final = 3;

let partidas = parseInt(prompt("Determine en números cuántas partidas sea jugar."));

let winsPlayer = 0;
let winsCompu = 0;
let rondas = 0;

let i= 0

while (i<partidas) { 
    let jugadora = prompt("Elija el número que la opción que prefiere: 1- Piedra. 2- Papel. 3-Tijera");
    let computadora = inicio + Math.floor(Math.random()* final);

    if (jugadora == 1 && computadora == 1) {
        rondas++;
        console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Piedra.\n 👾Computadora: Piedra. \n Se produjo un empate! \n Puntaje: \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
                
    } else if (jugadora == 1 && computadora == 2) {
            rondas++;
            winsCompu++;
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Piedra.\n 👾Computadora: Papel. \n Computadora ha ganado esta ronda. \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
                
    } else if (jugadora == 1 && computadora == 3) {
            rondas++;
            winsPlayer++;
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Piedra.\n 👾Computadora: Tijera. \n Usted ganó esta ronda!🎉 \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
               
    } else if (jugadora == 2 && computadora == 1) {
            rondas++;
            winsPlayer++;                
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Papel.\n 👾Computadora: Piedra. \n Usted ganó esta ronda!🎉 \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
                
    } else if (jugadora == 2 && computadora == 2) {
            rondas++;
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Papel.\n 👾Computadora: Papel. \n Se produjo un empate! \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
                
    }  else if (jugadora == 2 && computadora == 3) {
            rondas++;
            winsCompu++;
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Papel.\n 👾Computadora: Tijera. \n Computadora ha ganado esta ronda. \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
               
    } else if (jugadora == 3 && computadora == 1) {
            rondas++;
            winsCompu++;
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Tijera.\n 👾Computadora: Piedra. \n Computadora ha ganado esta ronda. \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
                
    } else if (jugadora == 3 && computadora == 2) {
            rondas++;
            winsPlayer++;
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Tijera.\n 👾Computadora: Papel. \n Usted ganó esta ronda!🎉 \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
               
    } else if (jugadora == 3 && computadora == 3) {
            rondas++;
            console.log ("Rondas jugadas: " + rondas+ " de " + partidas + ".\n 🙍‍♀️ Jugadora: Tijera.\n 👾Computadora: Tijera. \n Se produjo un empate! \n El puntaje es: Jugadora - " + winsPlayer + ". Computadora - " + winsCompu + ".");
    }
    
    i++;
            
}   
        
    if (winsPlayer > winsCompu) {
        document.write("Felicidades, usted ganó el juego!");
    } else if (winsCompu > winsPlayer) {
            document.write("La computadora ganó el juego. Inténtelo nuevamente!");
    } else if (winsCompu = winsPlayer) {
            document.write("Ambos ganaron la misma cantidad de partidas, esto es un empate!");
    };
    