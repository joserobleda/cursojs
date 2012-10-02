var Class = function(){};

Class.extends = function(prop){
	var _super = this.prototype, F = function(){}, Klass = function(){};

	F.prototype = _super;

	Klass.prototype = new F();
	Klass.prototype._super = _super;
	Klass.extends = Class.extends;


	for(key in prop){
		var val = prop[key];

		if( _super.hasOwnProperty(key) && typeof _super[key] == 'function' ){
			Klass.prototype[key] = (function(name, fn){
				return function(){
					this._super = _super[name];
					return fn.apply(this, arguments);
				}
			}(key, val))
		} else {
			Klass.prototype[key] = val;
		}
	}
	
	return Klass;
}


var Persona = Class.extends({
	hablar : function(){
		console.log("Hola, estoy hablando...");
	}
});


var Developer = Persona.extends({
	hablar : function(){
		console.log("Yo hablo PHP");
		this._super();
	},
	programar : function(){
		console.log("Programando...");
	}
});

var jose = new Developer();
jose.hablar();
jose.programar();

