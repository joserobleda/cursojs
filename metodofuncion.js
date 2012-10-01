function saluda(){
	console.log("Hola! Soy " + this.nombre);
}

var alicia = {
	nombre : "Alicia"
};


saluda(); // "Hola! Soy undefined"
saluda.call(alicia); // "Hola! Soy Alicia"
saluda.apply(alicia); // "Hola! Soy Alicia"