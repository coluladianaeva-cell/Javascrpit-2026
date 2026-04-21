/* 

Arreglos (arrays)

Un arreglo es una coleccion o lista de datos es decir una lista de elementos.

en JS los rragelos se definen utilizando los corchetes [] y los elementos internos se separan por comas ",".

Pueden contener el mismo tipo de datos o diferentes tipos, incluso pueden tener arreglos animados.

*/

let frutas = ["Durazno, sandia, melon, MANZANA, pera"];
let calificaciones = [10, 8, 5, 2];
let misDatos = ["Diana", 21, true]

console.log(frutas);
console.log(frutas.lenght);
console.log(frutas[3])

console.log("Calificaciones de diana" + calificaciones[3])

console.log("Diana es muy dormilona " + misDatos[1] + " años ");

let coordenadas = [[1, 2, 3], [4, 5, 6,], [7, 8, 9]];

console.log(coordenadas);
console.log(coordenadas[2])
console.log(coordenadas[2][2])

/* 

Metodos de los arreglos 

son un metodo de la funcion establecida que nos ayuda a trabajar con arreglos y sus datos.

push() 👉 agrega uno o mas elementos al final del arreglo
pop() 👉 Elimina el ultimo elemento del arreglo y lo devuelve 
shift() 👉 Elimina el primer elemento del arreglo y lo dvuelve 
ushift() 👉 agrega uno o mas elementos al inicio del arreglo 
indexOF () 👉 Devuleve el indice del primer elemento que coincida con el valor especificado o regresa-1 si no encuentra nada.

*/

let peliculas = ["Guerra mundial z", "rec 1", "Rapunzel"];
console.log(peliculas);
peliculas.push("Frozen", "Rec 2", "El conjuro");
console.log(peliculas);

let ultimaPelicula = peliculas.pop();
console.log(peliculas);
console.log("La ultima pelicula que vi" + ultimaPelicula);
let primerPelicula = peliculas.shift();

console.log(peliculas);
console.log("Mi primer movie que vi" + primerPelicula);

peliculas.unshift("Rec 2", "a todos los chicos de los que me enamore", "rapunzel");

console.log(peliculas)

console.log(peliculas.indexOf("Rapunzel"))

/* 

Interacion de arreglos

El acceso a los datos atraves d eun blucle o ciclo

*/

let antojitos = ["chalupas", "crepas", "sushi"]

antojitos.push("michelada", "crepa", "memelita");
antojitos.push("paleta", "gomita", "coca")

for (i = 0; i < antojitos.lenght; i++) {
  console.log("Se me antojo mucho" + antojitos[i] + "🤤")
}
