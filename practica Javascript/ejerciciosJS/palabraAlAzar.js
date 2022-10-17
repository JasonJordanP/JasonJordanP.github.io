/* TERMINAAAAAAAAAAAAAAAAAAAAR 9 - Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita 
        al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista 
        la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. 
        El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si 
       
        const palabras = ["camisa", "puerta", "helado", "cabeza"];

        function elementoAlAzar (datos){
                return datos [Math.floor(Math.random()* datos.length)]
        }       
        
        const palabraPorAdivinar = elementoAlAzar(palabras);

        console.log(palabraPorAdivinar);

        let usuario = prompt ("Intente adivinar la palabra de seis letras.")

        let i=1;
        let caracter = 0;

        while (i<7) {
            if (usuario != palabraPorAdivinar) { 
                alert("No adivinó la palabra. Pero no se desanime, aquí va una pista. La palabra es: " + palabraPorAdivinar.charAt(caracter));
                i++;
                caracter++;
                usuario = prompt ("Intente adivinar la palabra de seis letras.");
                
                alert("No adivinó la palabra. Pero no se desanime, aquí va una pista. La palabra es: " + palabraPorAdivinar.charAt(0) + palabraPorAdivinar.charAt(caracter));
                i++;
                caracter++;
                usuario = prompt ("Intente adivinar la palabra de seis letras.");

                alert("No adivinó la palabra. Pero no se desanime, aquí va una pista. La palabra es: " + palabraPorAdivinar.charAt(0) + palabraPorAdivinar.charAt(1) + palabraPorAdivinar.charAt(caracter));
                i++;
                caracter++;
                usuario = prompt ("Intente adivinar la palabra de seis letras.");

                alert("No adivinó la palabra. Pero no se desanime, aquí va una pista. La palabra es: " + palabraPorAdivinar.charAt(0) + palabraPorAdivinar.charAt(1) + palabraPorAdivinar.charAt(2) + palabraPorAdivinar.charAt(caracter));
                i++;
                caracter++;
                usuario = prompt ("Intente adivinar la palabra de seis letras.");

                alert("No adivinó la palabra. Pero no se desanime, aquí va una pista. La palabra es: " + palabraPorAdivinar.charAt(0) + palabraPorAdivinar.charAt(1) + palabraPorAdivinar.charAt(2) + palabraPorAdivinar.charAt(3)+ palabraPorAdivinar.charAt(caracter));    
                i++;
                caracter++;
                usuario = prompt ("Intente adivinar la palabra de seis letras.");

                alert("No adivinó la palabra. Pero no se desanime, aquí va una pista. La palabra es: " + palabraPorAdivinar.charAt(0) + palabraPorAdivinar.charAt(1) + palabraPorAdivinar.charAt(2) + palabraPorAdivinar.charAt(3)+ palabraPorAdivinar.charAt(4)+ palabraPorAdivinar.charAt(caracter));
                i++;
                
                alert("Lamentablemente se le terminaron los intentos. La palabra secreta era: " + palabraPorAdivinar);

            } else if (usuario === palabraPorAdivinar) {
                console.log ("Felicitaciones, adivinó correctamente la palabra secreta!");
                break
            }
        }
            */