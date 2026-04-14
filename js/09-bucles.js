/* 

Blucles 

Son estructuras de control que permiten repetir un bloque de codigos varias veces,hasta que se cumpla una condicion especifica.

Los mas comune son:

1. Bucle for: Se utiluza cuando sabemos cuantas veces queremos repetir un bloque de codigo.

Sintaxis: 

for ( inicializacion; condicion; incremento ) {
  //Codigo que se va a repetir su ejecucion 
}
  
Inicializacion: es una variable con un valor inicial.
Condicion: Evalua una expresion. true > Se ejecutara el bucle.
incremento: aumenta el valor de la variable en cada iteracion.

*/

for (let i = 0; i < 100; i++) {
  console.log('Hola mama')
}

/* 2. Bucle while

El bucle while se utiliza cuando no sabemos cuantas veces queremos repetir un bloque de codigo. Pero si queremos que se replica


Sintaxis: 
inicializacion

while (condicion) {
 // Codigo que se ejecuta 
 ...
 incremento
 
*/

let j = 1;
let repeticiones = parseInt(prompt("Cuantas veces quiera que se repita"))

while (j <= 5) {
  console.log(j);
  j++;
}

/* 
3. Bucle do...while

Este bucle es similar al bucle while, pero garantiza que el bucle de codigo se ejecute al menos una vez. Ya que la condicion se evalua despues de la ejecucion.

Sintaxis: 

Inicializacion 

do {
 //Codigo que se ejecuta al menos una vez 
 ...
 incremento 
 } while (condicion);

*/

let k = 5;

do {
  console.log('Diana Eva Colula');
  k++;
} while (k = 5)