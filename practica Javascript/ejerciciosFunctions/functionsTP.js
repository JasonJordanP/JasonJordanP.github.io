 function suma (a, b) {
        return a + b;
}
console.log(suma(20 , 60));


function restar (a, b) {
    return a - b;
}
console.log(restar(10, 2));


 function multiplicar (a, b){
        return a * b;
 }
 console.log(multiplicar(3, 9));


 function dividir (a , b) {
        return a / b;
 }
 console.log(dividir(6, 3));


 function esPar (a) {
        if (a % 2 === 0) {
            return "true"
        } else {
            return "false"
        }
 }
 console.log(esPar(81));


 function esimPar (a) {
        if (a % 2 === 0) {
            return "false"
        } else {
            return "true"
        }
}
console.log(esimPar(81));


function baseTriangulo (base, altura) {
        return base * altura /2;
}
console.log (baseTriangulo(8, 3));


function gritar (palabra) {
    return "¡" + palabra + "!";
}
console.log(gritar("elefante"));


function obtenerNombreCompleto (nombre, apellido) {
    return nombre + " " + apellido;
}
console.log(obtenerNombreCompleto("Jordan", "Pérez"));


function saludar (nombre) {
    return "Hola " + nombre + ", gracias por comunicarte con nosotros!";
}
console.log(saludar("María"));


function obtenerDatosDeCiudad (ciudad, poblacion, pais) {
    return `La ciudad de ${ciudad}  tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`;
}
console.log(obtenerDatosDeCiudad("Bogotá", 9872, "Colombia"));


function horasEnSegundos (horas) {
    return horas * 3600;
}
console.log (horasEnSegundos(2));


function calcularPorcentaje (numero, porcentaje) {
    return numero * porcentaje /100;
}
console.log(calcularPorcentaje(20, 50));

//------------------------------------------------------

//CREAR CUENTA REGRESIVA:
/*
let numeroInicial = Number(prompt("Ingrese un número:"));

let list = [];
let i = numeroInicial;

function cuentaRegresiva (numeroInicial) {
    
while (i<=numeroInicial && i>= 0) {
    list.push(numeroInicial);
    i--;
    numeroInicial--; 
} 
return list;
};

console.log(cuentaRegresiva(numeroInicial));

// INVERTIR ARRAY:
let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(prompt("Ingresar los números del array: "));
}

function alReves(numeros) {
  return numeros.reverse()
}

console.log("El array original es: " + numeros);
console.log("Array invertido es: " + alReves(numeros));

*/

//REMOVER ELEMNTOS DUPLICADOS:

let lista = [1,2, 'leche',6,'leche',2, 13, 14, 13, 5,9,'pan','pan'];
 
function removerDuplicados (lista) {
    let result = lista.filter((item,index)=>{
        return lista.indexOf(item) === index;
    })
    return result;
}

console.log(lista);
console.log(removerDuplicados(lista));