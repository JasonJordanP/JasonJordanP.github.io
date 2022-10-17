 /* 10 - Crear un programa para llevar la cuenta del puntaje de un partido de tenis. 
    Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, 
    y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y 
    anunciar la ganadora. */

let jugadora1 = prompt("Ingrese el nombre de la primera jugadora");
let jugadora2 = prompt("Ingrese el nombre de la segunda jugadora");

let menor = 1;
let mayor = 2;
    
let pointWinner = menor + Math.floor(Math.random()* mayor);

let puntosJugadora1 = 0;
let puntosJugadora2 = 0;

while (puntosJugadora1 <= 3 && puntosJugadora2 <= 3) {
        
    if (pointWinner == menor) {
        puntosJugadora1++;
        console.log("El punto es para: " + jugadora1+ ". \n Score: " + jugadora1 + " tiene " + puntosJugadora1 + " punto(s). " + jugadora2 + " tiene " + puntosJugadora2 + " punto(s).");
    } else { 
        puntosJugadora2++;
        console.log("El punto es para: " + jugadora2+ ". \n Score: " + jugadora1 + " tiene " + puntosJugadora1 + " punto(s). " + jugadora2 + " tiene " + puntosJugadora2 + " punto(s).");
    }
         
    pointWinner = menor + Math.floor(Math.random()* mayor);

    if (puntosJugadora1 === 3) {
        document.write("Felicidades " + jugadora1 + "🎉. Usted ganó el partido por " + puntosJugadora1 +" a " + puntosJugadora2 + ".");
        break;
    } else if (puntosJugadora2 === 3) {
        document.write("Felicidades " + jugadora2 + "🎉. Usted ganó el partido por " + puntosJugadora2 +" a " + puntosJugadora1 + ".");
        break;
    }
};
