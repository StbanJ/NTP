// Como se hacia antes

function Rectangulo(base, altura) {
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.calcularArea = function(){
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6,3)
// console.log(rectangulo.calcularArea());
// console.log(rectangulo.base);

// Declaracion de clases 

class Rectangulo2 {
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }
}

var rectangulo2 = new Rectangulo2(6,6)
console.log(rectangulo2.calcularArea());


// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>

/*
   DEBER
*/