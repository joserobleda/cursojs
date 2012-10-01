function Persona(name){
	this.name = name;
};
//console.log(Persona.constructor); // no sirve para prototipar
var miPersona = new Persona("Jose");

console.log(miPersona);