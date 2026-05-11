/* 

Funciones.

Las funciones de codigo reutilizables que realizan la tarea especifica. 

1. Funcion Declarada 

Es la forma mas comun de definir funciones. Se puede llamra a la funcion antes de su definicion debido al hoisting, es decir se "eleva" en el contexto de ejecucion. 

Sintaxis:

function nombreFuncion() {
// Cuerpa de la funcion
...
}

llamada o invocacion de la funcion:

nombreFuncion();

*/

dianaSaluda()

function dianaSaluda() {
  console.log("Hola soy diana y tengo siempre sueño");
}

/* 

2. Funcion expresada (anonimas)

Este tipo de funcion se asignan a una variable. No puede ser llamada antes de su definicion.

Sintaxis:

const nombreConstante = function() {
//Cuerpa de la funcion 
...
}

Llamada de la funcion:

nombreConstante();

*/

const joshuaDespedida = function () {
  console.log("Adios vaquero🤠");
}

joshuaDespedida();

/* 

3. Funcion flecha = Arrow Function 

Tienen una sitaxis mas consisa, son utiles para ejecucion cortas. Generalmente se asignan a variables.

Sintaxis: 

const nombreConstante = () => {
  //Cuerpa de la funcion
  ...
}

Llamada

nombreConstante();

*/

const astridSos = () => { console.log("Auxilio muero de hambre 🤤") };

astridSos();

/* 

Parametros y argumentos

Las funciones pueden aceptar parametros para recibir datos cuando son invocados.

Sintaxis:

function nombreFuncion( parametro1 , parametro2 , ...) {
//Cuerpa de la funcion
// Los parametros los usamos dentro del cuerpo de la funcion
...
}

Llamadas:

nombreFuncion( argumento1, argumento2, ...);

*/

function saludar(nombre) {
  console.log("Hola" + nombre);
}

saludar("Dianita");

const sumar = function (num1, num2) {
  let suma = num1 + num2;
  console.log("El resultado es" + suma);
}

sumar(5, 10);

/* 

parametros por defecto: 




Sintaxis:
function nombreFuncion( parm1 = valorDefault ) { 
//Codigo que se ejecuta o cuerpo de la funcion. ...
}

Llamada: 

nombreFuncion(); // usara los valores por defecto.
nombreFuncion(arg1); Usara el valor del argumento 

*/

const multiplicar = function (num1 = 1, num2 = 2) {
  let resultado = num1 * num2;
  console.log(´El resultado multiplicar ${ num1 } por ${ num2 } es: ${ resultado }´);
}

multiplicar()
multiplicar(5, 3);

/* 

Valor de retorno (return):

Las funciones pueden "devolver" o retornar un valor. Para esto se utiliza la palabra "return"

Sintaxis: 

function nombreFuncion() {
 // Cuerpa de la funcion.
 ...
 ...
 Return valor;
}
 
Llamada: 

const nombreContante = nombreFuncion();

*/

function despedida(nombre = 'Dianita') {
  return ´${ nombre } estas despedido!´;
}

const mensajito = despedido();

console.log(mensajito);

/* 

Retorno implicito:



sintaxis:

const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2