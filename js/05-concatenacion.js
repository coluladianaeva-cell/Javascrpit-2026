/* 

concatenacion de cadenas de texto 

Es el proceso de unir dos o mas cadenas de texto en una sola. este se hace utilizando el operado "+"

*/

console.log("tengo antojo de " + "antro 💄") 

let nombre = "Diana"
let apellido = "Garcia"
let edad = 22 

console.log("Hola me llamo " + nombre + " " + apellido + " y tengo " + edad + "años");

/*  

Plantillas literales

Es un espacio que se abre para la combinacion de variables, expresiones y cadenas de texto. Ayuda a concatenar de forma mas dinamica y simple. Se usan los backticks (acento invertido o acento agudo.) `´*/

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`)

/* 

Si se utiliza el operador de + con valores numerico se suman pero si se usan con cadenas de texto entonces se concatenan. 

*/

let a = 5;
let b = 10;

console.log(a + b) // "5"; 