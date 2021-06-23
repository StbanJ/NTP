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
//console.log(rectangulo2.calcularArea());


// Clase Persona
// implementar getters, setter y realizar una implementacion.
// implementar metodos estaticos - Clase Punto, Function distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona

/*
   DEBER
*/

class Persona {
    constructor(){
    this.nombres = "Esteban Alejandro"
    this.apellidos = "Revelo Jaramillo"
    this.cedula = 1003982269
    }
    get miPresentacion (){
        return `Hola soy ${this.nombres} ${this.apellidos} con cedula de identidad ${this.cedula}`;
    }
    set otrasPersona(miPresentacion){
        var array = miPresentacion.split(' ');
        this.nombres = array[0];
        this.apellidos = array[1];
        this.cedula = array[2];
    }  
}

class Estudiante extends Persona{
  getpersona(){
      console.log(this.nombres +' ' + this.apellidos + ' ' + this.cedula +' Periodo Academico Mayo - Octubre 2021');
  }
}

var persona = new Persona();
var personaestudiante = new Estudiante("Esteban Alejandro")
console.log(persona.miPresentacion);
persona.otrasPersona = "Natalia Ionova 5489623578"
console.log(persona.miPresentacion);
personaestudiante.getpersona();

class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  
  console.log (Punto.distancia(p1, p2));

