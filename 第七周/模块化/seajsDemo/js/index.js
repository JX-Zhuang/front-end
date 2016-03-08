define(function(require,exports,module) {
	require('jquery');
  // 通过 exports 对外提供接口
  exports.doSomething = function(){
  	console.log('my ok');
  	console.log($)
  }

  // 或者通过 module.exports 提供整个接口
 // module.exports = ...
})