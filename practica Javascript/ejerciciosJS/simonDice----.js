/* 12- Replicar el juego de Simón dice. El programa debe mostrar una secuencia de colores, 
agregando por cada ronda que pase otro color más. El usuario debe ingresar los colores de la secuencia uno por uno.
 Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar.
  Los colores posibles son: rojo, azul, verde y amarillo. Hay dos variantes posibles: o el juego continúa indefinidamente
   hasta que se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio 
   cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a
    la secuencia. 

let partidas = parseInt(prompt("Indique cuántas rondas consecutivas son la meta"));
let colores = ["rojo", "azul", "verde", "amarillo"];

function simonAleatorio (colores) {
    return[...colores]
    .sort(() => Math.random() >0.5 ? 1 : -1)
}
alert("Simón dice: "+simonAleatorio(colores));
let order = simonAleatorio(colores);

let ronda = prompt("Ingrese los colores en orden, uno por uno");
let i= 1;

function sigColorAleatorio (colores) {
    return[...colores]
    .sort(() => Math.random() >0.5 ? 1 : -1)
    .slice(0)
}

while (i!=0) { 
    if (ronda === order) {
        alert ("Felicidades, superó la primera ronda");
        i++;
        order = simonAleatorio(colores) + sigColorAleatorio(colores);
        ronda = prompt("Ingrese los colores en orden, uno por uno");
}   else {
    alert("El orden es incorrecto, perdió el juego :(");
    i=0;
}}
*/