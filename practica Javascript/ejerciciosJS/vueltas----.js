/* TERMINAAAAAAAAAAR 5 - Crear un programa para controlar las vueltas de una deportista. 
            Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo 
            en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de 
            cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas).
             Ejemplo:
    Cantidad de vueltas: 3
    Vuelta 1: 133s
    Vuelta 2: 145s
    Vuelta 3: 166s
    ⏱ Promedio: 144.45s
  
            let vueltas = Number(prompt("Ingrese la cantidad de vueltas que correrá"));

            let i= 1;

            while (i <= vueltas) {
                console.log(vueltas);
                
                let registro = prompt("Indique cuántos segundos le tomó dar la vuelta");
                console.log("Vuelta "+ i + ": " + registro + " segundos.");
                i++;
            }
            function promedio (vueltas, registro) {
                let resultado = registro/vueltas;
            }
            
                */