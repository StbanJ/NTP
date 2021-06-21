/*
   Concat
*/

var numeros = [1, 2, 3, 4, 5]
var nuevoNumeros= numeros.concat([6, 7, 8, 9, 0])

//console.log(numeros);
//console.log(nuevoNumeros)

/*
   Join
*/
var nombre = ["E", "S", "T", "E", "B", "A", "N"];
//console.log(numeros.join(" "));
//console.log(nombre.join(""));

/*
   Slice
*/

//console.log(nombre.slice(2));

/* 
   Index of
*/

//console.log(nombre.indexOf("A"));

/*
   Last index of
*/

//console.log(nombre.lastIndexOf("A"));

/*
   Revese
*/

//console.log(nombre.reverse())

/*
   Sort
*/

var numerosDesordenados = [5,6,7,3,4,2,1,9,]
//console.log(numerosDesordenados.sort())

/*
   Shift
*/

//console.log(numerosDesordenados.shift())

/*
   Pop
*/

//console.log(numerosDesordenados.pop());

/*
  Push
*/
numerosDesordenados.push(1,0,1,2)
//console.log(numerosDesordenados)

var pares = [2,4,6,8,10]

//console.log(pares.map((elemento) => elemento + 1));

/////////////////////////////////////////////////////////////////////////////////////////

// Consultar funciones de arreglos

/*
   every
*/

// verifica si 
//todos los elementos en el arreglo pasan la prueba 
//implementada por la función dada

var prueba = [5,5,5,5,5,5];
mayorQueCuatro = prueba.every(num => num > 4);
console.log(mayorQueCuatro);

/*
   some
*/

// verifica si 
// algún elemento de un array cumple con el test 
// implementado por la función brindada.

numeroGrande = prueba.some(num => num > 6 );
console.log(numeroGrande);

/*
   reduce
*/

// aplica una función a un acumulador y a cada valor 
// de un array (de izquierda a derecha) 
// para reducirlo a un único valor.

var prueba2 = [1,2,3,4,5,6];

suma = prueba2.reduce((total, values) => total + values, 0);
console.log(suma);

/*
   filter
*/

// crea un nuevo array con todos los elementos 
// que cumplan la condición 
// implementada por la función dada.

filtrar = prueba2.filter(num => num > 3);
console.log(filtrar);

/*
   includes
*/

// determina si un array incluye un determinado elemento, 
// devuelve true o false según corresponda. 
// Utiliza el algoritmo sameValueZero para determinar 
// si se encuentra el elemento dado.

var mascotas = ['perros', 'gatos', 'hamster'];

console.log(mascotas.includes('perros'));
console.log(mascotas.includes('cerdos'));