Template = (function(){

	var byString = function(text){
		var code = '%>' + text + '<%';
		
		code = code
			.replace(/[\n\t\r]/g, ' ')
			.replace(/<%=\s?(.*?);?\s*%>/g, "\t, ($1), \t")
			.replace(/%>(.*?)<%/g, "__trozos__.push(\t$1\t);")
			.replace(/\t(.*?)\t/g, function(_, str){
				str = str.replace(/(['"])/g, "\\$1");
				return "'" + str + "'";
			})
		;

		code = "var __trozos__ = []; " + code + "; return __trozos__.join('')";


		var myfn = new Function(code);

		return function(data){
			return myfn.call(data);
		}
	};

	var byId = function(id){
		return byString(document.getElementById(id).innerHTML);
	};

	return {
		byId : byId,
		byString : byString
	}
}());

var plantilla = '<% for(var i=10; i--;) { %> <p id="hola"> "EY" <%= this.body %> </p> <% } %>',
	render = Template.byString(plantilla);


console.log(
	render({body: "Esto es un párrafo"})
);