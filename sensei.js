// // class Ninja
class Ninja {
    constructor(nombre, velocidad, fuerza) {
      this.nombre = nombre;
      this.velocidad = velocidad;
      this.fuerza = fuerza;
      this.salud = 0;
    }
    sayName() {
      console.log(`Hello my name is ${this.nombre}`);
    }
    
    drinkSake() {
      this.salud += 10;
    console.log();
    }
    showStats() {
      console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad},
      salud: ${this.salud}`);
    }
  }
  
  const ninja1 = new Ninja("Hyabusa", 3, 3);
  ninja1.sayName();
  ninja1.drinkSake();
  ninja1.showStats();

//class extendida sensei
class Sensei extends Ninja {
constructor (nombre, velocidad, fuerza){
    super (nombre, velocidad, fuerza);
   this.velocidad = velocidad;
      this.fuerza = fuerza;
      this.salud = 200;
      this.sabiduria = 10;
}
speakWisdom(){
    super.drinkSake();
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    
}
showStats(){
    console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad},
    salud: ${this.salud} Sabiduria: ${this.sabiduria}`);   
}
}
const sensei1 = new Sensei("Master Splinter", 10, 10, 200)
sensei1.speakWisdom();
sensei1.showStats();