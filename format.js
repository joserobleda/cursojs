String.prototype.format = function(){
	var args = Array.prototype.slice.call(arguments),
		str = this.toString();

	for(var i = 0, len = args.length; i<len; i++){
		var arg = args[i], regexp = new RegExp('%'+ (i+1), "g");
		str = str.replace(regexp, arg);
	}

	return str;
}



"%1 + %1 = %2".format(10, 20);

