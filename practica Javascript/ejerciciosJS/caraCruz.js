/*7 - Crear un programa que permita escoger entre cara o cruz. 
        El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. 
        El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si 
        en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad 
        máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, 
        el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, 
        y terminar su ejecución.  */

let eleccion = parseInt(prompt("Escriba '1' para elegir CARA o '2' para elegir CRUZ. En su defecto, elija '3' para SALIR"));
let op1 = 1;
let op2 = 2;
        

let aciertos = 0;
        
while (eleccion === 1 || eleccion === 2) {
    for (let i=1; i<10; i++) {
        let moneda = op1 + Math.floor(Math.random()* op2);
                
        if (moneda === 1 && eleccion === 1) {
            console.log("La moneda al azar fue CARA");
            console.log("Usted acertó");
            aciertos++;
            console.log("Sus aciertos consecutivos son: " +aciertos);
                        
        } else if (moneda === 2 && eleccion === 1) {  
                console.log("La moneda al azar fue CRUZ");
                console.log("Usted no acertó");
                aciertos = 0;
                console.log("Sus aciertos consecutivos vuelven a ser 0");
                        
        } else if (moneda === 1 && eleccion === 2) {
                console.log("La moneda al azar fue CARA");
                console.log("Usted no acertó");
                aciertos = 0;
                console.log("Sus aciertos consecutivos vuelven a ser 0");
                        
        } else if (moneda === 2 && eleccion === 2) {  
                console.log("La moneda al azar fue CRUZ");
                console.log("Usted acertó");
                aciertos++;
                console.log("Sus aciertos consecutivos son: " +aciertos); 
                          
        } else if (eleccion === 3) {
                console.log("Terminó el juego. Usted logró " + aciertos + " aciertos consecutivos.");
                } 
            
        eleccion = parseInt(prompt("Escriba '1' para elegir CARA o '2' para elegir CRUZ. En su defecto, elija '3' para SALIR"));
            }
    };
                    