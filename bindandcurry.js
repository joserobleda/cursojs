function curry(fn) {
    var slice = Array.prototype.slice,
        args = slice.call(arguments, 1);
    return function() {
      var newargs = slice.call(arguments);
      return fn.apply(this, args.concat(newargs));
    };
}

 function bind(ctx, fn) {
          return function() {
            return fn.apply(ctx, arguments);
          }
}

var unObj = {
  nombre: "Manuel",
  edad: 32
};
function getNombre() { return this.nombre; }
function setNombre(nombre) { this.nombre = nombre; }
function getEdad() { return this.edad; }
function setEdad(edad) { this.edad = edad; }
var bindToUnObj = curry(bind, unObj),
    getUnObjNombre = bindToUnObj(getNombre),
    setUnObjNombre = bindToUnObj(setNombre);
setUnObjNombre("Pepito");

console.log( getUnObjNombre() ); // ???


