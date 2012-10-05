
var defaults = {
	method: "POST"
};

var options = {
	method: "GET"
};

function merge(){
	var ob = {};

	for(i=0, l=arguments.length; i<l; i++){
		var objeto = arguments[i];

		for(propName in objeto){
			ob[propName] = objeto[propName];
		}
	};

	return ob;

}
var op = merge(defaults, options);

console.log(op);