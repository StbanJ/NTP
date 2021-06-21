/*
   Funciones declarativas
*/
 // retorno de valores
function saludar(){
    return "Hola soy Esteban"
}
// funciones void
function saludar2(){
    console.log("Hola soy Alejandro!")
}
//funciones con parametros
function SaludarConParametros(nombre, apellido){
    return `Hola soy ${nombre} ${apellido}`
}
//funciones con parametros por defecto
function SaludoConProfesion(nombre="Persona", profesion="Estudiante"){
    return `Hola ${nombre} mi profesion es : ${profesion}`
}

//console.log(SaludoConProfesion("Esteban","Analista en Sistemas"));
// var nombre = "Esteban";
// var apellido = "Revelo";
// console.log(SaludarConParametros("Esteban", "Revelo"));
//saludar()
//var resultado = saludar()
// console.log(resultado);
// console.log(saludar());
// saludar2()

/*
   Funciones Expresivas - Funciones Anonimas
*/

var SaludoConEdad = function(nombre, edad) {
    return `Hola soy ${nombre} y tengo ${edad} año(s)`
}
//console.log(SaludoConEdad("Esteban",26));

/*
   Arrow Fuctions - Funciones Fecha
*/

var SaludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`

var suma = (num1, num2) => num1 + num2

//console.log(SaludoConApellido("Esteban","Revelo"));
//console.log(suma(2,3));

/*
   Funciones con parametros de otras funciones
*/
function SaludoConFunciones(nombre, cb) {
    return cb(nombre)
}

var miSaludo = SaludoConFunciones("Esteban", function(nombre) {
    return `Hola soy ${nombre}`
})

var miSaludo2 = SaludoConFunciones("Esteban", (nombre) =>    `Hola soy ${nombre}`)
// //console.log(miSaludo2);

// setTimeout(() => {
//     console.log("Hola mundo")
// }, 3000);


// setInterval(() => {
//    console.log("Hola Mundo") 
// }, 2000);