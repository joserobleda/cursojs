String.prototype.days = function(){
	var num = parseInt(this, 10), 
		t = ( Math.round((new Date()).getTime() / 1000) - ( num * 24 * 60 * 60 ) ) * 1000;

	return t;
}

String.prototype.years = function(){
	var num = parseInt(this, 10), 
		t = ( Math.round((new Date()).getTime() / 1000) - ( num * 365 * 24 * 60 * 60 ) ) * 1000;

	return t;
}

Number.prototype.ago = function(){
	var num = parseInt(this, 10);
	return new Date(num);
}

console.log( "5".years().ago() );