function MiClase(){
	this.tipo = "test";
};

MiClase.prototype.saludar = function(txt){
	return txt + this.tipo;
}

MiClase.metodoEstatico = function(){
	return "static method";
};

var instancia = new MiClase();

console.log(instancia.tipo);
console.log(instancia.saludar("Hola! "));
console.log(MiClase.metodoEstatico());