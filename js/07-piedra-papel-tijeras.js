/* 

Juego piedra, papel o tijeras 

Vamos a acrear un juego interactivo donde el usuario pueda jugar contra la regla.

Reglas:

-Piedra vence a tijera 
-Tijera vence a papel
-Papel vence a piedra 
-Si ambos eligen el mismo es empate

Pasos para implementar:

-Definir las opciones del jugador 
-Generar una opcion aleatoria para la computadora
-Comparar estas opciones y determinamos al ganador
-Mostrar el resultado

Estructura a utilizar:
-Variables
-Condicionales
-Generar un numero aleatorio (Math.random)
-Operadores logicos y de comparacion
-Concatenacion de cadenas de texto (templates literals ) 
*/















//variables. 1. Opcion del jugador

const opcionJugador = prompt('Para jugar escribe: Piedra, papel o tijera'); //Piedra papel o tijera 

//2. Opcion de la computadora 

const numeroAleatorio = Math.random(); // Entre  0 y 1 

let opcionComputadora;

//3. Condicional - Asignar una opcion dependiendo del numero 

if (numeroAleatorio < 0.33) {
  opcionComputadora = 'piedra';
} else if (numeroAleatorio < 0.66) {
  opcionComputadora = 'papel';
} else {
  opcionComputadora = 'tijera';
}

console.log(opcionCompuatdora);

//4. Mostrar la eleccion 
console.log('Piedr, papel o tijera');
console.log('tu eleccion es: ' + opcionJugador);
console.log('La compu eligio: ' + opcionComputadora);
console.log('------------------------------');

//5. Determinarl al ganador apartir de las condicionales 

let resultado;
if (opcionJugador === opcionComputadora) {
  resultado = 'Empate ambos eligieron '

}