/* TERMINAAAAAAAAAAR 5 - Crear un programa para controlar las vueltas de una deportista. 
            Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo 
            en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de 
            cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas).
             Ejemplo:
    Cantidad de vueltas: 3
    Vuelta 1: 133s
    Vuelta 2: 145s
    Vuelta 3: 166s
    ⏱ Promedio: 144.45s*/
  
        
            let usua= prompt("Ingrese la cantidad de vueltas que va realizar");
            let tiempo =[];
            let total =0;
            for (i =0 ; i < usua; i++){
                let vueltas = prompt(" Indique el tiempo de su " + (i+1) + " vuelta (en segundos)");
                tiempo.push(parseInt(vueltas));
                total +=parseInt(vueltas);
            
                console.log("vuelta" + Number(i+1) + " : " + total + "s");
                let suma = total / vueltas;
                console.log("⏱", suma);
            }