
	var Class = require("./betterklass.js").Class;


	var Widget = Class.extend({
		init : function(data){
			if( data.events ){
				for(def in data.events){
					var   aux = def.split(' ')
						, eventName = aux.shift()
						, selector = aux.join(' ')
						, fn = data.events[def]
					;

					console.log("Event: " + eventName);
					console.log("Selector: " + selector);
					console.log("Function: " + fn);
				}
			}
		}
	});


	var MyWidget = new Widget({
		events : {
			"click a.button span": "inform"
		}
	});