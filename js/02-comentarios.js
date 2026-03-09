/* 

Variables 

Los contenedores que almacenan datos. En JS se pueden declarar variables utilixando las palabras clave: var, let, const

var: Es la forma mas antigua de declarar variables. Tiene un alcance global y puede ser re-declarada ny actualizada.

let: Es la forma moderna de declarar variables. Tiene un alcance de bloque o local. Puede ser actualizada para no redeclarse dentro del mismo alcance.

const: Tiene un alcance de bloque y no pueden ser redeclaradas ni actualizadas. Se utilizan con valores que nunca deben cambiar.

*/

//Declaracion con Var 

var mihijo = "Russell";

console.log(mihijo)

mihijo = "Russell";

console.log(mihijo)

//Declaracion con let

let edad = 1;

console.log(edad);

edad = 1;

console.log(edad)

//Declaracion con const

const PI = 3.1416;

console.log(PI);

//PI = "Russell"