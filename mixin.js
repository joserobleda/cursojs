function augment(target, source) {
	for (var prop in source.prototype) {
		if(!target.prototype[prop]) {
			target.prototype[prop] = source.prototype[prop];
		} 
	}
}