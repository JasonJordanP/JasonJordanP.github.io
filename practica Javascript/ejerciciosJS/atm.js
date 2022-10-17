/*  13 - Crear un programa que tenga un dinero inicial.
●	El programa también deberá contar con un menú con las siguientes opciones:
○	EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
○	DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
○	CONSULTAR SALDO: debe mostrar el saldo actual
○	VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
○	SALIR: debe terminar la ejecución del programa
●	El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:
ULTIMOS MOVIMIENTOS
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
*/

let saldo = 500;

let menu = prompt("Introduzca el número de la opción que desea ejecutar: \n 1- EXTRAER. \n 2- DEPOSITAR. \n 3- CONSULTAR SALDO. \n 4- VER ÚLTIMOS MOVIMIENTOS. \n 5- SALIR.");
let saldoNuevo = 0;
let saldoActualizado=0;
let i=1;

while (i != 0) {
    switch (menu) {
   
    case '1':  
        let extraccion = Number(prompt("Ingrese la suma de dinero que desea extraer de su cuenta:"));

        if (extraccion <= saldo) {
            let saldoNuevo = saldo - extraccion;
            saldoActualizado++;
            i=0;
            console.log(saldoNuevo);
                if (saldoNuevo != 0) {
                    let saldo = saldoNuevo;
                    }
            menu = prompt("Introduzca el número de la opción que desea ejecutar: \n 1- EXTRAER. \n 2- DEPOSITAR. \n 3- CONSULTAR SALDO. \n 4- VER ÚLTIMOS MOVIMIENTOS. \n 5- SALIR.");
            
        } if (extraccion > saldo){
            alert("No posee dinero suficiente en su cuenta. Intente una cifra menor a " + saldo + ".");
            i++;
            break
        } 
        
    
        if (saldoActualizado === 0 && extraccion <= saldo) {
            let saldoNuevo = saldo - extraccion;
            saldoActualizado++;

            console.log(saldoNuevo);
            break
        } else if (saldoActualizado != 0){
            let saldonuevo = saldo;
        
            console.log(saldoNuevo);
            break
        } else if (saldoActualizado === 0 && extraccion > saldo) {

            let saldo = saldoNuevo;
            alert("No posee dinero suficiente en su cuenta. Intente una cifra menor a " + saldoNuevo + ".");
        }
            menu = prompt("Introduzca el número de la opción que desea ejecutar: \n 1- EXTRAER. \n 2- DEPOSITAR. \n 3- CONSULTAR SALDO. \n 4- VER ÚLTIMOS MOVIMIENTOS. \n 5- SALIR.");
                
       
     
    case '2': 
        let deposito = Number(prompt("Ingrese la cantidad a depositar: "));
        let saldoNuevo = saldo + deposito;
        //console.log("Su nuevo saldo es: $" + saldoNuevo);
        saldoActualizado++;

        let continua = prompt ("¿Desea realizar otra operación? Ingrese '1' en caso afirmativo o '2' en caso negativo");

            if (continua === "1"){
                i++;
                menu = prompt("Introduzca el número de la opción que desea ejecutar: \n 1- EXTRAER. \n 2- DEPOSITAR. \n 3- CONSULTAR SALDO. \n 4- VER ÚLTIMOS MOVIMIENTOS. \n 5- SALIR.");    
            } else { 
                alert("Gracias por visitar nuestro banco. Hasta la próxima!");
                console.log(saldoNuevo);
                i=0;
                break
                }
        break    
    
    case '3': 
        
        if (saldoActualizado != 0) {
        let consultado = alert("Su saldo actual es de: " + saldoNuevo + " pesos");

        break;
        
        } else if (saldoActualizado == 0) {
            let consultado = alert("Su saldo actual es de: " + saldo + " pesos.");

            break;
            
        }
        

    case '4': 
        alert("Sus últimos movimientos son: \n Extraído: $" + extraccion + "\n Depositado: $" + deposito + "\n Saldo Consultado: $" + consultado);
        break;
        }
};
