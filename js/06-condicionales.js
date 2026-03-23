/* 

Condicionales

Son estructuras de control que permiten ejecutar diferentes bloques de codigo segun una condicion (verdadero o falso).

1. If (si es veradadera)

Evalua una condicion y si es verdadera (true) ejecuta el codigo dentro de sus llaves.

sintaxis:

 if (condicion) {
    // codigo que se ejecuta
  }

*/
let edad = 13 ;

if (edad >= 18) { // verdadero o falso
    //Codigo que se ejcuta
    console.log("Eres mayor de edad puedes ver este contenido 😉")
}

/* 

2. Else (no es verdadero) 

Permite ejecutar un bloque de codigo si la condicion evalua a falsa.

Sintaxis: 
if (condicion) {
  //codigo que se ejecuta si es verdadero
} else {
    // codigo que se ejecuta si es falso 
 
   }   
    
*/

let hora = 16;

if (hora < 12) {
    console.log("buenso dias solecito") // false
} else {
    console.log("buenas tardes chifurimpulo")
}

/* 

3. else if (si no es verdadero)

Nos va a permitir mas de una condicion para ser evaluada. Esta evaluacion es secuenci, hasta que una condicion sea verdadera entonces se ejecutara el bloque de codigo.

sintaxis:

if (condicion) {
 // codigo que se ejecuta
} else if (condicion) {
 // codigo que se ejecuta si la condicion es verdadera 

} else {
    // codigo que se ejecuta si ninguna de las condiciones es verdadera.

}

*/

let calificacion = 6;
if (calificacion >= 9) {
    console.log("eres un excelente programador")
} else if (calificacion >=7) {
    console.log ("ahi la llevas ya casi te sale")
}else if (calificacion >= 5) {
    console.log("echale mas ganitas o nos vemos en el extra")
} else {
    console.log("ya valio barriga, bienvenido al extra")
}
