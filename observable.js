	var Class = require("./betterklass.js").Class;



function mixin(target, source) {
	for (var prop in source) {
		target[prop] = source[prop];
	}

	if( typeof source['mixed'] == 'function' ){
		target['mixed']();
	}
};


var Observable = {
	mixed: function(klass){
		klass.prototype.subscribers = {};
	},
	subscribe: function(event, callback){
		this.subscribers[event] || ( this.subscribers[event] = [] );
		this.subscribers[event].push(callback);
	},
	unsubscribe: function(event, callback){
		if( this.subscriberses[event] ){
			this.subscribers[event].forEach(function(o, i){
				if( o === callback ) delete this.subscribers[event][i];
			})
		}
	},
	publish: function(event){
		this.subscribers[event].forEach(function(o){
			o();
		})
	}
};

var Input = Class.extend({
	type: "text"
});



Input.mixin(Observable);

var MyInput = new Input();

MyInput.subscribe('save', function(){
	console.log('on save');
});

MyInput.publish('save');