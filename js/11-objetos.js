/* 

Objetos 

Son colecciones de propiedades. Una propiedad es una asociacion entre un nombre (clave o key) y un valor (value)

Los valores pueden ser distintos tipos: numeros, cadenas de texto, boleanos, arreglos, funciones.

Sintaxis:
nombreObjeto = {
// Propiedades (clave: valor)
clave1: valor,
clave2: valor,
clave3: valor,

}

*/

const perrito = {
  nombre: 'Russell',
  edad: 1,
  raza: 'Bulldog',
  jugueton: true,
  brinca: false,
  juguetes: ['botellas de plastico', 'pelotas'],
  saludo: function () { console.log("Hola me llamo russell🐶") }

}

console.log(perrito);

/* 

Para accceder a las propiedades y sus valores, utilizamos la notacion de punto o la notacion de corchetes

nombreObjeto.clave 👉 notacion de punto
nombreObjetoclave [clave] 👉 notacion de corchetes

*/

console.log(perrito.aunladra);
console.log(perrito['aun ladra']);

console.log("Hola me llamo" + perrito.nombre + "y tengo" + perrito.edad + "años" + "y soy un perrito" + perrito.raza); 