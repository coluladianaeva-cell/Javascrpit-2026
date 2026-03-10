/* 

Tipos de datos

Los tipos de datos son una clasificacion de los diferentes valores que podemos manejar en un lenguaje de programacion.

En JS existe varios tipos de datos que se pueden agrupar a dos categorias: primitivos y complejos (objetos).

Cada tipo de dato tiene sus caracteristicas y usos especificos de programacion.

1. primitivos
  Datos basicos que no se consideran objetos y no tienen metodos.
  
  Numero o numbers 👉Representan valores numericos ya sea enteros o decimales.

  Cadena de caracteres o strings👉Representan texto. El texto se coloca entre comillas dobles o simples. Hay que ser consistentes en su uso.

  Booleanos o Booleans👉Representan valor logico que puede ser verdadero (true) o falso (False).

  Indefinido o Undifined👉Es el valor que se asigna a una variable que ha sido declarada pero no se ha inicializado. 

*/

// Numbers 

let miEdad = 21;
let miEstatura = 1.63;

console.log(miEdad);
console.log(miEstatura);

// Strings 

let miNombre = 'Diana Eva';
let misApellidos = 'Colula Garcia' ;

console.log(miNombre);
console.log(misApellidos);

// Booleans

let esEstudioso = true;
let esGuapa = false;

console.log(esEstudioso);
console.log(esGuapa);

// Undefined

let aprobaraProgramacion;

console.log(aprobaraProgramacion);

/* 

2. Complejos (Objetos)

 Arreglo o Array👉Es un conjunto de datos que se almacenan en una lista ordenada. Los datos dentro de un arreglo se escriben entre corchetes:  () y se separan con comas.
 
 Objetos u Objects👉Es un conjunto de multiples datos en pares: clave-valor. Los datos dentro de un objeto se escriben entre llaves: {} y se separan por comas.
 
 Funciones o Functions👉Es un tipo de dato que puede ser invocado. Se declaran con la palabra reservada  function y el codigo que ejecutan va entre llaves{}.
 
 */

 // Array
 let misCaricaturas = ['monster high', 'Pistas de blue', 'Bubbleguppies'];
 let misNumeros = [9, 1, 19, 29, 9];
 let tutifrutty = ['Diana', 12345, true, false];

 console.log(misCaricaturas);
 console.log(misCaricaturas[2]);
 console.log(misNumeros);
 console.log(misNumeros[3])
 console.log(tutifrutty);
 console.log(tutifrutty[2])

 // Objetos 

let perro = {
    nombre:'Russell', 
    edad: 2, 
    tamaño:'pequeño', 
    color:'cafe',
    ladra: true,
}

console.log(perro);
console.log(perro.nombre);
console.log(perro.edad);
console.log(perro.ladra);

// Functions

let saludar = function() {
    // Aqui va el codigo que se ejecuta cuando se invoca a la funcion 
    console.log('Hola mama estoy aprendiendo Javascript')
}

console.log(saludar);

saludar(); // Invocamos a la funcion 



