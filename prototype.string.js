String.prototype.times = function(cb){
	var val = parseInt(this, 10)
	if( !isNaN(val) ){
		for (i=0;i<val;i++) cb(i);
	};
};


"4".times(function(i){
	console.log("Hola por "+ i +" times");
});