
var Modulo = { version: 1.1 };


var mytest = (function(Modulo){
	console.log(Modulo);

	return function(){
		return Modulo = { version: 1.2 };
	};
}(Modulo));


console.log(Modulo);
console.log(mytest());
console.log(Modulo);