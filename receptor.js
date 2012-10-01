

var obj = {
	nombre : "Pepe",
	saludar : function(){
		console.log("Hola " + this.nombre);
	}
};

var yo = {
	nombre : "Jose"
};

yo.saludar = obj.saludar;
yo.saludar(); // "Hola jose";