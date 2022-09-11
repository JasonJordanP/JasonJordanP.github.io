let nombre = prompt ("Ingrese su nombre completo");
 console.log(nombre);

let numero1 = prompt ("Ingrese su número preferido");
 console.log(numero1);

let numero2 = prompt ("Ingrese un número al azar");
 console.log(numero2);

alert ("Hola " + nombre + " bienvenido a la página");

let resultado1 = parseInt(numero1) + parseInt(numero2);


alert ("El resultado de la suma de los números que usted indicó es: " + resultado1 );

document.write("El resultado de la suma de sus números más la cantidad de caracteres de su nombre es: ",resultado1 + nombre.length);