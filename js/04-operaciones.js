/* 

Operadores 
Son simbolos que indican al interprete */

















let a =10;















/* 

2. Operadores de asignacion 

Estos operadores se utilizan para asignar valores a las variables.
 
= 👉Asignacion 
+=👉Suma y asigna 
-=👉 Resta y asigna
*=👉Multiplica y asigna 
/=👉 Divide y asigna
%=👉 Residuo y asigna 

*/

let c = 20;
console.log(c); // 20

c += 5; 
console.log(c); // 25

c -= 15; 
console.log(c); // 15

c *= 2;
console.log(c); // 30

c /= 3; 
console.log(c); // 10

c %= 3;
console.log(c); // 1

/* 

3. Operadores de comparacion 

Se utilizan para comparar dos valores o expresiones y devuelve un valor booleano (true) or (false).

== 👉 igualdad. Compara solo el valor.
=== 👉 igualdad estrica, Compara el valor y el tipo de dato.
!=👉desigualdad. Compara el valor. 
!== 👉 desigualdad estricta. Compara el valor y el tipo de dato. 
> 👉mayor que 
< 👉 menor que 
>= 👉 mayor o igual que 
<= 👉 menor o igual que 

*/

let d = 10; // number
let e = "10"; // string 

console.log(d == e); // true 
console.log(d === e); // false 
console.log(d != e); // false 
console.log(d !== e); // true 

console.log(d > 5); // true 
console.log(d < 15); // true
console.log(d >= 10); // true
console.log(d <= 5); // false

/* 

4. Operadores logicos 

Los utilizamos para combinar expresiones boleanas. 

&& 👉 AND (Y) - Si ambos valores son verdaderos o expresiones entonces el resultado sera verdadero. Si al menos un valor es falso, el resultado sera falso.

|| 👉 OR  (o) - Si al menos un valor es verdaero el resultado sera verdadero. Solo si ambos valores son falsos el resultado sera falso.

! 👉 NOT  (no) - Niega el valor. El resultado es el valor contrario al que esta asignado.

*/

 let f = true; // 10 > 5
 let g = false; // 10 === "10"

 console.log( f && g); // false
 console.log( f || g); // true
 console.log( !f ); // false
  console.log( !g ); // true

