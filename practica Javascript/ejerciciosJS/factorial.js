/* 4- Crear un programa que pida ingresar un número, y muestre su factorial. 
Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1.
            Por ejemplo: 4 ⇒ 4 _ 3 _ 2 * 1 = 24 */

let num = parseInt(prompt("Ingrese un número"));
    alert("A continuación se mostrará su factorial");
let facto = 1;
        
for (let i = 1; i <= num ; i++) {
    facto = facto * i;
    }
document.write("El factorial de " + num + " es igual a: " +facto);
            