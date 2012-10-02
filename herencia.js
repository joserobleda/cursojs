function bind(ctx, fn) {
	return function() {
		return fn.apply(ctx, arguments);
	}
};

function inherits(Child, Parent){
	function F(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.superclass = Parent;
};


function Animal(){}

Animal.prototype.mover = function(){
	console.log("El animal se mueve...");
};

Animal.prototype.comer = function(){
	console.log("!Ñam!");
};

function Perro(){
	this.superclass.call(this);
}

inherits(Perro, Animal);

Perro.prototype.comer = function(){
	console.log("El perro va a por su plato...");
	this.superclass.prototype.comer.call(this);
};

var p = new Perro("terrier");
p.mover();
p.comer();
p instanceof Perro;