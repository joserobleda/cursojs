
function clone(Parent){
	var F = function(){};
	F.prototype = Parent;
	return new F();
};

var Animal = {
	vivo: true,
	comer: function(){
		console.log("Comiendo...");
	}
};


var Perro = clone(Animal);
Perro.vivo = false;

console.log(Perro);
console.log(Animal);
Perro.comer();